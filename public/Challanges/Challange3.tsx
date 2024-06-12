import { useState } from "react";

const LactoseIntolerant = () => {
  return (
    <h1>
      <span
        role="img"
        aria-label="broccoli and strawberry"
        className="text-[40px]"
      >
        🥦🍓
      </span>
    </h1>
  );
};

const LactoseTolerant = () => {
  return (
    <h1>
      <span role="img" aria-label="milk and cheese" className="text-[40px]">
        🥛🧀
      </span>
    </h1>
  );
};

const Challange3 = () => {
  const [randomBool, setRandomBool] = useState(true);

  const generateRandomBoolean = () => {
    const randomValue = Math.random() < 0.5;
    console.log(randomValue);
    setRandomBool(randomValue);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-[25%] gap-2">
      {randomBool ? <LactoseIntolerant /> : <LactoseTolerant />}
      <button
        className="px-2 py-1 bg-background rounded-sm w-[100px]"
        onClick={generateRandomBoolean}
      >
        reload
      </button>
    </div>
  );
};

export default Challange3;
