import { useRef, useState, useEffect } from "react";

const useEventListener = (
  target: any,
  eventName: any,
  handler: any,
  options: any
) => {
  const handlerRef = useRef(handler);

  useEffect(() => {
    handlerRef.current = handler;
  }, [handler]);

  useEffect(() => {
    const targetElement = target.current ?? target;

    if (!targetElement?.addEventListener) return;

    const eventListener = (event: any) => handlerRef.current(event);

    targetElement.addEventListener(eventName, eventListener, options);

    return () => {
      targetElement.removeEventListener(eventName, eventListener, options);
    };
  }, [target, eventName, options]);
};

const Challange61 = () => {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e: any) => {
    const element = ref.current;
    if (element && !element.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEventListener(document, "mousedown", handleClick);

  return (
    <section className="h-full flex flex-col justify-center items-center gap-3 text-[white] relative">
      <h1 className="text-2xl font-bold">useEventListener</h1>
      <div className="text-[orange] ">
        <button className="underline" onClick={() => setIsOpen(true)}>
          Click me
        </button>
      </div>
      {isOpen && (
        <div className="h-full w-full   absolute flex justify-center items-center">
          <div ref={ref} className="bg-background p-6 rounded ">
            <div className="flex justify-between px-4 mb-6">
              <h2 className="text-lg font-bold">Modal</h2>
              <button onClick={() => setIsOpen(false)} className="text-[red]">
                Close
              </button>
            </div>
            <p className="px-4">
              Click outside the modal to close (or use the button) whatever you
              prefer.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Challange61;
