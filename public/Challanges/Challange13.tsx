import { useState } from "react";

const Challange13 = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="h-[100%] flex flex-col items-center justify-center text-[white]">
      <p className="text-[120px]">{count}</p>
      <div className="flex gap-2 justify-center items-center">
        <button
          onClick={decrement}
          className="px-4 py-2 bg-[#f59f00fb] hover:bg-[#f59f00a9] rounded-sm"
        >
          -
        </button>
        <button
          onClick={increment}
          className="px-4 py-2 bg-[#f59f00fb] hover:bg-[#f59f00a9] rounded-sm"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Challange13;
