import { useState } from "react";

const Challange12 = () => {
  const [mode, setMode] = useState("dark");

  const handleClick = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };

  return (
    <main
      className={`h-[100%] ${
        mode === "dark"
          ? "bg-[#222831]"
          : "bg-[white] border border[#6886b3] rounded-sm"
      } flex justify-center items-center`}
    >
      <button
        onClick={handleClick}
        className="px-4 py-2 rounded-md bg-background bg-[#f59f00fb] hover:bg-[#f59f00a9]"
      >
        {mode === "dark" ? "Activate Dark Mode" : "Activate Light Mode"}
      </button>
    </main>
  );
};

export default Challange12;
