import { useRef, useCallback, useEffect, useState } from "react";

const useClickAway = (cb: any) => {
  const ref = useRef(null);

  // Memoize the event handler to avoid unnecessary re-renders
  const onEventHandler = useCallback(
    (e: any) => {
      const element = ref.current; //@ts-ignore

      if (element && !element.contains(e.target)) {
        cb(e);
      }
    },
    [cb]
  );

  useEffect(() => {
    document.addEventListener("mousedown", onEventHandler);
    document.addEventListener("touchstart", onEventHandler);

    return () => {
      document.removeEventListener("mousedown", onEventHandler);
      document.removeEventListener("touchstart", onEventHandler);
    };
  }, [onEventHandler]);

  return ref;
};

// For Challange66 component
export default function Challange66() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useClickAway(() => {
    setIsOpen(false);
  });

  const handleOpenModal = () => {
    if (isOpen === false) {
      setIsOpen(true);
    }
  };
  return (
    <>
      <section className="h-full flex flex-col justify-center items-center gap-3 text-[white] relative">
        <h1 className="text-2xl font-bold">useClickAway</h1>
        <button className="text-[orange] underline" onClick={handleOpenModal}>
          Open Modal
        </button>
        {isOpen && (
          <div className="h-full w-full absolute flex justify-center items-center bg-[#292a36]">
            <div ref={ref} className="bg-background p-6 rounded ">
              <div className="flex justify-between px-4 mb-6">
                <h2 className="text-lg font-bold">Modal</h2>
                <button onClick={() => setIsOpen(false)} className="text-[red]">
                  Close
                </button>
              </div>
              <p>
                Click outside the modal to close (or use the button) whatever
                you prefer.
              </p>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
