import { useMemo, useRef, useState } from "react";
const isTouchEvent = ({ nativeEvent }: any) => {
  return window.TouchEvent
    ? nativeEvent instanceof TouchEvent
    : "touches" in nativeEvent;
};

const isMouseEvent = (event: any) => {
  return event.nativeEvent instanceof MouseEvent;
};
//@ts-ignore
const useLongPress = (callback, options = {}) => {
  //@ts-ignore
  const { threshold = 400, onStart, onFinish, onCancel } = options;
  const isLongPressActive = useRef(false);
  const isPressed = useRef(false);
  const timerId = useRef();

  return useMemo(() => {
    if (typeof callback !== "function") {
      return {};
    }

    const start = (event: any) => {
      if (!isMouseEvent(event) && !isTouchEvent(event)) return;

      if (onStart) {
        onStart(event);
      }

      isPressed.current = true; //@ts-ignore
      timerId.current = setTimeout(() => {
        callback(event);
        isLongPressActive.current = true;
      }, threshold);
    };

    const cancel = (event: any) => {
      if (!isMouseEvent(event) && !isTouchEvent(event)) return;

      if (isLongPressActive.current) {
        if (onFinish) {
          onFinish(event);
        }
      } else if (isPressed.current) {
        if (onCancel) {
          onCancel(event);
        }
      }

      isLongPressActive.current = false;
      isPressed.current = false;

      if (timerId.current) {
        window.clearTimeout(timerId.current);
      }
    };

    const mouseHandlers = {
      onMouseDown: start,
      onMouseUp: cancel,
      onMouseLeave: cancel,
    };

    const touchHandlers = {
      onTouchStart: start,
      onTouchEnd: cancel,
    };

    return {
      ...mouseHandlers,
      ...touchHandlers,
    };
  }, [callback, threshold, onCancel, onFinish, onStart]);
};

const Challange72 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const attrs = useLongPress(
    () => {
      setIsOpen(true);
    },
    {
      //@ts-ignore
      onStart: (event) => console.log("Press started"), //@ts-ignore
      onFinish: (event) => console.log("Press finished"), //@ts-ignore
      onCancel: (event) => console.log("Press cancelled"),
      threshold: 500,
    }
  );
  return (
    <section className="h-full flex flex-col justify-center items-center gap-4 text-[white] relative">
      <h1 className="text-2xl font-bold">useLongPress</h1>

      <button
        {...attrs}
        className="bg-[#f59f00fb] rounded px-4 py-2 text-[black]"
      >
        Press Me
      </button>

      {isOpen && (
        <div className="h-full w-full absolute flex justify-center items-center">
          <div className="bg-background p-6 rounded ">
            <div className="flex justify-between px-4 mb-6">
              <h2 className="text-lg font-bold">Modal</h2>
              <button onClick={() => setIsOpen(false)} className="text-[red]">
                Close
              </button>
            </div>
            <p className="px-4">This is a modal triggered by a long press.</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Challange72;
