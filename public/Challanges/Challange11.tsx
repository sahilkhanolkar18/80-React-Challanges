import { useState } from "react";

const Challange11 = () => {
  const [mode, setMode] = useState("dark");

  const handleDarkMode = () => {
    setMode("dark");
  };

  const handleLightMode = () => {
    setMode("light");
  };

  return (
    <main
      className={`h-[100%] ${
        mode === "dark"
          ? "bg-[#222831]"
          : "bg-[white] border border[#6886b3] rounded-sm"
      } flex justify-center items-center`}
    >
      {mode === "light" ? (
        <button
          onClick={handleDarkMode}
          className="px-4 py-2 rounded-md bg-background bg-[#f59f00fb] hover:bg-[#f59f00a9]"
        >
          Activate Dark Mode
        </button>
      ) : (
        <button
          onClick={handleLightMode}
          className="px-4 py-2 rounded-md bg-background bg-[#f59f00fb] hover:bg-[#f59f00a9]"
        >
          Activate Light Mode
        </button>
      )}
    </main>
  );
};

export default Challange11;
