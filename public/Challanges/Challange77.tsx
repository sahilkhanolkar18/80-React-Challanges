import { useState, useRef, useEffect } from "react";

const useCountdown = (endTime: any, options: any) => {
  const { interval = 1000, onTick = () => {}, onComplete = () => {} } = options;
  const [count, setCount] = useState(null);
  const intervalIdRef = useRef(null);

  const handleClearInterval = () => {
    if (intervalIdRef.current) {
      clearInterval(intervalIdRef.current);
      intervalIdRef.current = null;
    }
  };

  useEffect(() => {
    if (endTime === null) return;

    const tick = () => {
      const now = Date.now();
      const remainingTime = Math.max(0, Math.round((endTime - now) / interval));

      if (remainingTime === 0) {
        handleClearInterval();
        onComplete();
      } else {
        setCount(remainingTime);
        onTick();
      }
    };

    tick(); // Initial call to set the initial count
    intervalIdRef.current = setInterval(tick, interval);

    return () => handleClearInterval();
  }, [endTime, interval, onTick, onComplete]);

  return count;
};

const Challange77 = () => {
  const [endTime, setEndTime] = useState(new Date(Date.now() + 10000));
  const [complete, setComplete] = useState(false);

  const count = useCountdown(endTime, {
    interval: 1000,
    onTick: () => console.log("tick"),
    onComplete: () => setComplete(true),
  });

  const handleClick = (time: any) => {
    if (complete) return;
    const nextTime = endTime.getTime() + time;
    setEndTime(new Date(nextTime));
  };

  return (
    <section className="h-full flex flex-col justify-center items-center gap-3 text-[white]">
      <header>
        <h1 className="text-xl font-bold">useCountdown</h1>
      </header>
      <span className="text-6xl ">{count !== null ? count : "Loading..."}</span>
      {!complete && (
        <div className="text-[orange] underline flex justify-center items-center gap-5">
          <button onClick={() => handleClick(5000)}>+5s</button>
          <button onClick={() => handleClick(10000)}>+10s</button>
          <button onClick={() => handleClick(15000)}>+15s</button>
        </div>
      )}
    </section>
  );
};

export default Challange77;
