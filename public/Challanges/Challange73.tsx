import { useState, useEffect } from "react";

const useKeyPress = (key, cb, options = {}) => {
  const { event = "keydown", target = window, eventOptions } = options;

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === key) {
        cb(event);
      }
    };

    target.addEventListener(event, handler, eventOptions);

    return () => {
      target.removeEventListener(event, handler, eventOptions);
    };
  }, [key, cb, target, event, eventOptions]);
};

const Challange73 = () => {
  const [activeKey, setActiveKey] = useState("");

  const handleKeyPress = (e: any) => {
    e.preventDefault();
    setActiveKey(e.key);
    setTimeout(() => {
      setActiveKey("");
    }, 600);
  };

  useKeyPress("ArrowRight", handleKeyPress);
  useKeyPress("ArrowLeft", handleKeyPress);
  useKeyPress("ArrowUp", handleKeyPress);
  useKeyPress("ArrowDown", handleKeyPress);

  return (
    <section className="h-full flex flex-col justify-center items-center gap-4 text-[white]">
      <h1 className=" text-2xl font-bold">useKeyPress</h1>
      <p className="text-sm text-[orange]">
        Press one of the arrow keys on your keyboard
      </p>
      <div className="flex flex-col justify-center items-center gap-2">
        <div>
          <button
            className={`${
              activeKey === "ArrowUp" ? "bg-[#f59f00fb]" : "bg-[#AD49E1]"
            } h-[50px] w-[50px] `}
          >
            <span>&uarr;</span>
          </button>
        </div>
        <div className="flex justify-center items-center gap-2">
          <button
            className={`${
              activeKey === "ArrowLeft" ? "bg-[#f59f00fb]" : "bg-[#AD49E1]"
            } h-[50px] w-[50px] `}
          >
            <span>&larr;</span>
          </button>
          <button
            className={`${
              activeKey === "ArrowDown" ? "bg-[#f59f00fb]" : "bg-[#AD49E1]"
            } h-[50px] w-[50px] `}
          >
            <span>&darr;</span>
          </button>
          <button
            className={`${
              activeKey === "ArrowRight" ? "bg-[#f59f00fb]" : "bg-[#AD49E1]"
            } h-[50px] w-[50px] `}
          >
            <span>&rarr;</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Challange73;
