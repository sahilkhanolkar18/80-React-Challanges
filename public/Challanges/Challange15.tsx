import { useState } from "react";
import { Eye, EyeSlash } from "../assets/svgIcons";

const LimitedTextInput = ({ characterLimit }: any) => {
  const [inputValue, setInputValue] = useState("");
  const [isInputValueVisible, setIsInputValueVisible] = useState(false);

  const remainingCharacters = characterLimit - inputValue.length;
  const limitExceeded = remainingCharacters < 0;

  const handleToggleVisibility = () => {
    setIsInputValueVisible(!isInputValueVisible);
  };

  const handleChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (limitExceeded) {
      alert("The input exceeds the character limit. Please shorten your text.");
    } else {
      setInputValue("");
      alert("Thanks for your submission");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-full ">
      <form
        className="w-[500px] flex flex-col justify-center items-center gap-2"
        onSubmit={handleSubmit}
      >
        {/* <p className="uppercase text-[white] font-semibold text-[24px] text-center ">
          Character Limit
        </p> */}
        <div className="text-sm text-[white] flex justify-between w-[100%]">
          <p>Password:</p>
          <p>
            <span className={limitExceeded ? "error" : "no-error"}>
              {remainingCharacters}
            </span>
          </p>
        </div>
        <div className="relative">
          <input
            onChange={handleChange}
            className="px-2 py-1 border border-[white] bg-[black] text-[white] rounded-sm w-[500px]"
            placeholder="Enter a password"
            value={inputValue}
            type={isInputValueVisible ? "text" : "password"}
          />
          <div
            className="absolute top-2 right-2"
            onClick={handleToggleVisibility}
          >
            {!isInputValueVisible ? <Eye /> : <EyeSlash />}
          </div>
        </div>

        <button
          type="submit"
          className="bg-[#f3a007] hover:bg-[#f59f008a] w-full py-1 mt-1"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

const Challange15 = () => {
  return <LimitedTextInput characterLimit={8} />;
};

export default Challange15;
