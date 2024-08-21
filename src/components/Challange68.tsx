import { useState, useEffect, useCallback, useRef } from "react";

const useLogger = (name: string, rest: any) => {
  const initialRenderRef = useRef(true);

  // Memoize the log handler to avoid re-creating it on each render
  const handleLog = useCallback(
    (event: string) => {
      console.log(`${name} ${event}:`, rest);
    },
    [name, rest]
  );

  // Log on component mount and update
  useEffect(() => {
    if (initialRenderRef.current === false) {
      handleLog("updated");
    }
  });

  // Log on component mount and unmount
  useEffect(() => {
    handleLog("mounted");
    initialRenderRef.current = false;

    return () => {
      handleLog("unmounted");
      initialRenderRef.current = true;
    };
  }, [handleLog]);
};

const FirstChild = (props: any) => {
  useLogger(props.name, props);
  return (
    <li
      className={`${
        props.isActive ? "active" : ""
      } h-[100px] w-[100px] bg-background rounded-md flex flex-col items-center justify-center gap-1 text-[black] text-md`}
    >
      <h5>{props.name}</h5>
      <p className="text-3xl font-semibold">{props.count}</p>
    </li>
  );
};

const Challange68 = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => setCount(count + 1);

  return (
    <section className="h-full flex flex-col justify-center items-center gap-4 text-[white]">
      <h1 className="text-2xl text-bold">useLogger</h1>
      <p className="text-sm text-[green]">(Check the console)</p>
      <button
        className="bg-[#f59f009f] px-4  py-2 rounded-md"
        onClick={handleClick}
      >
        Increment Count
      </button>
      <ul className="flex items-center justify-center gap-5">
        {["First", "Second", "Third"].map((item, index) => {
          const isActive = count % 3 === index;
          return (
            <FirstChild
              key={index}
              name={item}
              isActive={isActive}
              count={count}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Challange68;
