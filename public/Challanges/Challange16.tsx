import { Line } from "rc-progress";

const Challange16 = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <form
        className="w-[500px] flex flex-col justify-center items-center gap-2"
        // onSubmit={handleSubmit}
      >
        <h1 className="w-full text-[white]">Personal Details</h1>

        <p className="w-full text-[white] text-sm">Step 1 of 3</p>

        <Line
          percent={50}
          strokeWidth={4}
          strokeColor="#f3a007"
          strokeWidth={1}
          trailWidth={1}
        />

        <p className="w-full text-[white] text-md mt-1">Email</p>
        <input
          // onChange={handleChange}
          className="px-2 py-1 border border-[white] bg-[black] text-[white] rounded-sm w-[500px]"
          placeholder="Enter email"
          // value={inputValue}
          // type={isInputValueVisible ? "text" : "password"}
        />
        <p className="w-full text-[white] text-md mt-1">Password</p>
        <input
          // onChange={handleChange}
          className="px-2 py-1 border border-[white] bg-[black] text-[white] rounded-sm w-[500px]"
          placeholder="Enter password"
          // value={inputValue}
          // type={isInputValueVisible ? "text" : "password"}
        />
        <button
          type="submit"
          className="bg-[#f3a007] hover:bg-[#f59f008a] w-full py-1 mt-2"
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default Challange16;
