import { useCallback, useRef, useEffect, useState } from "react";

const useIntervalWhen = (cb, { ms, when, startImmediately }) => {
  const id = useRef(null);
  const immediatelyCalled = useRef(startImmediately === true ? false : null);

  const handleClearInterval = useCallback(() => {
    window.clearInterval(id.current);
    immediatelyCalled.current = false;
  }, []);

  useEffect(() => {
    if (when === true) {
      id.current = window.setInterval(cb, ms);

      if (startImmediately === true && immediatelyCalled.current === false) {
        cb();
        immediatelyCalled.current = true;
      }

      return handleClearInterval;
    }
  }, [ms, when, startImmediately, cb, handleClearInterval]);

  return handleClearInterval;
};

const Challange64 = () => {
  const [count, setCount] = useState(0);
  const [when, setWhen] = useState(false);

  useIntervalWhen(
    () => {
      setCount((c) => c + 0.1);
    },
    { ms: 100, when, startImmediately: true }
  );

  return (
    <section className="h-full flex flex-col justify-center items-center gap-3 text-[white]">
      <h1 className="text-2xl text-bold">useIntervalWhen</h1>
      <p className="text-sm text-[green]">Click to toggle the timer</p>
      <button
        title="Click to toggle the timer"
        onClick={() => setWhen(!when)}
        className="rounded-full bg-[#134B70] h-[170px] w-[170px] flex flex-col justify-center items-center text-3xl gap-2"
      >
        {count.toLocaleString("en-US", {
          maximumFractionDigits: 2,
          minimumFractionDigits: 2,
        })}
        <span
          className={`${
            when ? "bg-[red] text-lg" : "bg-[green] text-lg"
          }  px-4 py-1 rounded`}
        >
          {when ? "stop" : "start"}
        </span>
      </button>
    </section>
  );
};

export default Challange64;
