import { useState, useCallback } from "react";

const useCounter = (startingValue = 0, options = {}) => {
  const { min, max } = options;

  if (typeof min === "number" && startingValue < min) {
    throw new Error(
      `Your starting value of ${startingValue} is less than your min of ${min}.`
    );
  }

  if (typeof max === "number" && startingValue > max) {
    throw new Error(
      `Your starting value of ${startingValue} is greater than your max of ${max}.`
    );
  }

  const [count, setCount] = useState<any>(startingValue);

  const increment = useCallback(() => {
    setCount((c: any) => {
      const nextCount = c + 1;

      if (typeof max === "number" && nextCount > max) {
        return c;
      }

      return nextCount;
    });
  }, [max]);

  const decrement = useCallback(() => {
    setCount((c: any) => {
      const nextCount = c - 1;

      if (typeof min === "number" && nextCount < min) {
        return c;
      }

      return nextCount;
    });
  }, [min]);

  const set = useCallback(
    (nextCount: any) => {
      setCount((c: any) => {
        if (typeof max === "number" && nextCount > max) {
          return c;
        }

        if (typeof min === "number" && nextCount < min) {
          return c;
        }

        return nextCount;
      });
    },
    [max, min]
  );

  const reset = useCallback(() => {
    setCount(startingValue);
  }, [startingValue]);

  return [
    count,
    {
      increment,
      decrement,
      set,
      reset,
    },
  ];
};

const Challange50 = () => {
  const [count, { increment, decrement, set, reset }] = useCounter(5, {
    min: 5,
    max: 10,
  });
  return (
    <section className="h-full flex flex-col justify-center items-center text-[white] gap-3">
      <h1 className="font-semibold text-xl">UseCounter</h1>
      <h6 className="text-sm text-[green]">with optional min / max</h6>
      <div className="flex gap-5 underline text-[orange]">
        <button
          disabled={count >= 10}
          className={count >= 10 ? "text-[grey] underline" : ""}
          onClick={increment}
        >
          Increment
        </button>
        <button
          disabled={count <= 5}
          className={count <= 5 ? "text-[grey] underline" : ""}
          onClick={decrement}
        >
          Decrement
        </button>
        <button className="link" onClick={() => set(6)}>
          Set to 6
        </button>
        <button className="link" onClick={reset}>
          Reset
        </button>
      </div>
      <p className="text-8xl font-bold">{count}</p>
    </section>
  );
};

export default Challange50;
