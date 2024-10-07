import { useState, useCallback, memo, useEffect } from "react";

function ChildComponent({ children, onClick }: any) {
  console.count("Child component is rendering...");
  return (
    <button
      onClick={onClick}
      className="bg-[#f3a007] hover:bg-[#f59f008a] w-[150px] rounded-md text-[black] py-1 "
    >
      {children}
    </button>
  );
}

const MemoizedChildComponent = memo(ChildComponent);

const Challange38 = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleIncrementCount = useCallback(() => {
    setCount((count) => count + 1);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-full text-[white]">
      <div className="flex flex-col gap-2">
        <p className="text-lg text-[20px]">Current time: {time}</p>
        <p className="">Count: {count}</p>
        <MemoizedChildComponent onClick={handleIncrementCount}>
          Increment Count
        </MemoizedChildComponent>
      </div>
    </div>
  );
};
export default Challange38;
