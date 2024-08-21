import { useState, useEffect, useRef, useCallback } from "react";

function getRandomNumber(min: any, max: any) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const useRandomInterval = (cb, { minDelay, maxDelay }) => {
  const timeoutId = useRef(null);

  const handleClearTimeout = useCallback(() => {
    window.clearTimeout(timeoutId.current);
  }, []);

  const tick = useCallback(() => {
    const interval = getRandomNumber(minDelay, maxDelay);
    timeoutId.current = window.setTimeout(() => {
      cb();
      tick();
    }, interval);
  }, [minDelay, maxDelay, cb]);

  useEffect(() => {
    tick();
    return handleClearTimeout;
  }, [tick, handleClearTimeout]);

  return handleClearTimeout;
};

const Challange62 = () => {
  const [key, setKey] = useState(null);

  const clear = useRandomInterval(
    () => {
      setKey(Math.random());
    },
    { minDelay: 50, maxDelay: 1000 }
  );

  return (
    <section className="h-full flex flex-col justify-center items-center gap-3 text-[white]">
      <h1 className="text-2xl text-bold">useRandomInterval</h1>
      <button className="text-[orange] underline" onClick={clear}>
        Stop
      </button>
      <div className="popper" key={key} />
      <p className="text-[red] text-sm">Heart-beat</p>
    </section>
  );
};

export default Challange62;
