import { useState, useEffect, useRef } from "react";
import { Xmark } from "../assets/svgIcons";

const Challange25 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (isOpen === true) {
      const handleEvent = (e: any) => {
        const element = ref.current;
        if (element && !element.contains(e.target)) {
          setIsOpen(false);
        }
      };

      document.addEventListener("pointerdown", handleEvent);

      return () => {
        document.removeEventListener("pointerdown", handleEvent);
      };
    }
  }, [isOpen]);

  const handleOpenModal = () => {
    if (isOpen === false) {
      setIsOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={`flex flex-col justify-center h-full items-center relative ${
        isOpen ? "bg-[#000000be]" : ""
      }`}
    >
      <section className="flex flex-col items-center justify-center gap-1">
        <h1 className="text-[white] text-[22px] font-semibold">
          Click Outside
        </h1>
        <button
          className="text-md text-[white] underline "
          onClick={handleOpenModal}
        >
          Open Modal
        </button>
      </section>

      {isOpen && (
        <div
          ref={ref}
          className="absolute top-[40%] bg-background p-7 rounded-md"
        >
          <button onClick={handleCloseModal} className="absolute top-3 right-3">
            <Xmark />
          </button>

          <h2 className="text-[white] font-semibold ">Modal</h2>
          <p className="text-[white]">
            Click outside the modal to close (or use the button) whatever you
            prefer.
          </p>
        </div>
      )}
    </div>
  );
};

export default Challange25;
