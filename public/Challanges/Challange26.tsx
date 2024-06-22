import { useState, useRef } from "react";

const Challange26 = () => {
  const [text, setText] = useState("");
  const textAreaRef = useRef(null);

  const handleChange = (event: any) => {
    setText(event.target.value);
    textAreaRef.current.style.height = "inherit";
    const scrollHeight = textAreaRef.current.scrollHeight;
    textAreaRef.current.style.height = scrollHeight + "px";
  };

  return (
    <section className="flex flex-col h-full justify-center w-[350px] mx-auto">
      <h1 className="text-[white] text-[22px] mb-3 font-semibold">
        Expanding Textarea
      </h1>
      <label htmlFor="textarea" className="text-[white] mb-1 text-md">
        Enter or paste in some text
      </label>
      <div className="h-[30px]">
        <textarea
          id="textarea"
          placeholder="Enter text"
          ref={textAreaRef}
          value={text}
          onChange={handleChange}
          rows={1}
          className="px-2 py-0 border border-[white] bg-[black] text-[white] rounded-sm w-full"
        />
      </div>
    </section>
  );
};

export default Challange26;
