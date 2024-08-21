import { useState, useEffect, useCallback } from "react";

const useContinuousRetry = (
  callback: () => boolean,
  interval = 100,
  options = {}
) => {
  const { maxRetries = Infinity } = options;
  const [hasResolved, setHasResolved] = useState(false);

  const memoizedCallback = useCallback(callback, [callback]);

  useEffect(() => {
    let retries = 0;
    const id = window.setInterval(() => {
      if (memoizedCallback()) {
        setHasResolved(true);
        window.clearInterval(id);
      } else if (retries >= maxRetries) {
        window.clearInterval(id);
      } else {
        retries += 1;
      }
    }, interval);

    return () => window.clearInterval(id);
  }, [interval, maxRetries, memoizedCallback]);

  return hasResolved;
};

const Challange59 = () => {
  const [count, setCount] = useState(0);
  const hasResolved = useContinuousRetry(
    () => {
      console.log("retrying");
      return count > 10;
    },
    1000,
    { maxRetries: 5 }
  );

  return (
    <section className="h-full flex flex-col justify-center items-center gap-3 text-[white]">
      <h1 className="text-2xl font-bold">useContinuousRetry</h1>
      <button
        className="px-4 py-2 bg-background rounded-md"
        onClick={() => setCount(count + 1)}
      >
        Increament count: {count}
      </button>
      <div className="bg-[#1A4870] py-3 px-6 rounded-md">
        <pre>{JSON.stringify({ hasResolved, count }, null, 2)}</pre>
      </div>
    </section>
  );
};

export default Challange59;
