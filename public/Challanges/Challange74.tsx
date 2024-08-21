import { useState, useRef, useEffect } from "react";

const useThrottle = (value: any, interval = 500) => {
  const [throttledValue, setThrottledValue] = useState(value);
  const lastUpdated = useRef<any>(null);

  useEffect(() => {
    const now = Date.now();

    if (lastUpdated.current && now >= lastUpdated.current + interval) {
      lastUpdated.current = now;
      setThrottledValue(value);
    } else {
      const id = window.setTimeout(() => {
        lastUpdated.current = now;
        setThrottledValue(value);
      }, interval);

      return () => window.clearTimeout(id);
    }
  }, [value, interval]);

  return throttledValue;
};

const Challange74 = () => {
  const [val, setVal] = useState("");
  const throttledValue = useThrottle(val);
  return (
    <section className="h-full flex flex-col justify-center items-center gap-5 text-[white]">
      <h1 className="text-2xl font-bold">useThrottle</h1>
      <input
        placeholder="Type some text"
        className="py-2 px-4 border border-[white] w-[250px] text-[black]"
        type="text"
        value={val}
        onChange={(e) => {
          setVal(e.target.value);
        }}
      />
      <div className="w-[250px] flex flex-col gap-2">
        <p>
          <span className="text-[orange]">Val:</span> {val}
        </p>
        <p>
          {" "}
          <span className="text-[orange]">Throttled:</span> {throttledValue}
        </p>
      </div>
    </section>
  );
};

export default Challange74;
