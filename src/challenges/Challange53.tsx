import { useState, useEffect } from "react";

const useTimeout = (cb: any, ms: any) => {
  useEffect(() => {
    const id = window.setTimeout(cb, ms);

    return () => {
      window.clearTimeout(id);
    };
  }, [cb, ms]);
};

const Bomb = ({ hasExploded, hasDefused, handleClick }: any) => {
  if (hasExploded) {
    return (
      <figure className="flex flex-col justify-center items-center">
        <span role="img" aria-label="Explosion Emoji" className="text-[80px]">
          💥
        </span>
        <figcaption>You lose</figcaption>
      </figure>
    );
  }

  if (hasDefused) {
    return (
      <figure className="flex flex-col justify-center items-center">
        <span
          role="img"
          aria-label="Party Popper Emoji"
          className="text-[80px]"
        >
          🎉
        </span>
        <figcaption>You Win</figcaption>
      </figure>
    );
  }

  return (
    <button
      className="flex flex-col justify-center items-center"
      onClick={handleClick}
    >
      <span role="img" aria-label="Dynamite Emoji" className="text-[80px]">
        🧨
      </span>
    </button>
  );
};

const Challange53 = () => {
  const [hasExploded, setHasExploded] = useState(false);
  const [hasDefused, setHasDefused] = useState(false);

  useTimeout(() => {
    if (!hasDefused) {
      setHasExploded(true);
    }
  }, 5000); // 5 seconds timeout

  const handleClick = () => {
    if (!hasExploded) {
      setHasDefused(true);
    }
  };

  const handleReload = () => {
    setHasExploded(false);
    setHasDefused(false);
  };

  return (
    <div className="h-full flex flex-col justify-center items-center text-[white] gap-4 w-full">
      <h1 className="text-2xl font-semibold">UseTimeout</h1>
      <p>You have 5 seconds to defuse (click) the bomb or it will explode</p>
      <button onClick={handleReload} className="text-[orange] underline">
        Reload
      </button>
      <Bomb
        hasExploded={hasExploded}
        hasDefused={hasDefused}
        handleClick={handleClick}
      />
    </div>
  );
};

export default Challange53;
