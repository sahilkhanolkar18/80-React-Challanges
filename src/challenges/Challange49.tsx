import { useState, useRef, useCallback, useEffect } from "react";

const useInterval = (cb: any, ms: any) => {
  const id = useRef<number | null>(null);
  const savedCallback = useRef(cb);

  useEffect(() => {
    savedCallback.current = cb;
  }, [cb]);

  const handleClearInterval = useCallback(() => {
    if (id.current !== null) {
      window.clearInterval(id.current);
    }
  }, []);

  useEffect(() => {
    id.current = window.setInterval(() => savedCallback.current(), ms);
    return handleClearInterval;
  }, [ms, handleClearInterval]);

  return handleClearInterval;
};

const Challange49 = () => {
  const colors = [
    "Aqua",
    "Black",
    "Blue",
    "Fuchsia",
    "Gray",
    "Green",
    "Lime",
    "Maroon",
    "Navy",
    "Olive",
    "Purple",
    "Red",
    "Silver",
    "Teal",
    "White",
    "Yellow",
  ];
  const [running, setIsRunning] = useState(true);
  const [index, setIndex] = useState(0);

  const clear = useInterval(() => {
    setIndex(index + 1);
  }, 1000);

  const handleStop = () => {
    clear();
    setIsRunning(false);
  };
  const color = colors[index % colors.length];

  return (
    <section className="flex flex-col h-full justify-center items-center text-[white]  gap-3">
      <h1 className="font-bold text-lg">useInterval</h1>
      <button className="text-[orange]" onClick={handleStop}>
        {running ? "Stop" : "Stopped"}
      </button>
      <article>
        <figure className="flex gap-4  items-center justify-center py-2 px-8 rounded-md">
          <div className="flex flex-col items-center gap-1">
            <div
              style={{ backgroundColor: color }}
              className="h-[150px] w-[150px] rounded-md"
            ></div>
            <figcaption>Current: {color}</figcaption>
          </div>
        </figure>
      </article>
    </section>
  );
};

export default Challange49;
