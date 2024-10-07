import { useRef, useEffect } from "react";

const Challange22 = () => {
  const inputRef = useRef<any>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="flex flex-col justify-center h-full w-[350px] m-auto">
      <h1 className="text-[22px] text-[white] font-semibold">
        Autofocus Input
      </h1>
      <label htmlFor="focus" className="text-[white] mt-3">
        Email Address
      </label>
      <input
        id="focus"
        ref={inputRef}
        type="email"
        placeholder="Enter your email"
        className="px-2 py-1 border border-[white] bg-[black] text-[white] rounded-sm w-full mt-1 mb-2"
      />
    </div>
  );
};

export default Challange22;
