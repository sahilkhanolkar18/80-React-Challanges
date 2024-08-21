import { useState, useEffect } from "react";

//using custom hook to display title dynamically.
const Challange42 = () => {
  const [count, setCount] = useState(0);

  useDocumentTitle(`Clicked ${count} times.`);

  return (
    <div className="flex flex-col justify-center items-center h-full gap-2">
      <h1 className="text-[white] font-bold text-[20px]">USEDOCUMENTTITLE</h1>
      <p className="text-[white] text-sm">
        watch the tab title change when incremented.
      </p>
      <button
        className="bg-[#f3a007] hover:bg-[#f59f008a] rounded-md px-4 py-2 "
        onClick={() => setCount(count + 1)}
      >
        Increment Count: {count}
      </button>
    </div>
  );
};

// useDocumentHook
const useDocumentTitle = (title: any) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};
export default Challange42;
