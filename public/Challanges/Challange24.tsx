import { useState, useEffect, useRef } from "react";
const Challange24 = () => {
  const [notes, setNotes] = useState([
    "Components encapsulate both the visual representation of a particular piece of UI as well as the state and logic that goes along with it.",
    "The same intuition you have about creating and composing together functions can directly apply to creating and composing components. However, instead of composing functions together to get some value, you can compose components together to get some UI.",
    "JSX combines the power and expressiveness of JavaScript with the readability and accessibility of HTML",
    "Just like a component enabled the composition and reusability of UI, hooks enabled the composition and reusability of non-visual logic.",
  ]);

  const lastNoteRef = useRef<any>(null);

  useEffect(() => {
    if (lastNoteRef.current) {
      lastNoteRef.current.scrollIntoView();
    }
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newNote = formData.get("note");
    if (newNote.trim()) {
      setNotes([...notes, newNote]);
      form.reset();
    }
  };

  return (
    <article className="flex flex-col w-[400px] m-auto justify-center h-full ">
      <div className=" h-[300px] my-auto">
        <h1 className="text-[white] text-[20px] font-semibold">Field Notes</h1>

        <div>
          <ul className="border text-[white] rounded-md px-4 h-[200px] overflow-auto">
            {notes.map((msg, index) => (
              <li
                ref={index === notes.length - 1 ? lastNoteRef : null}
                key={index}
                className={` my-2 p-2 text-sm w-[300px] ${
                  index % 2 === 1
                    ? "bg-[#423b3d] rounded-r-lg rounded-t-lg"
                    : "bg-[#9872d1] rounded-l-lg rounded-tr-lg ml-[49px]"
                }`}
              >
                {msg}
              </li>
            ))}
          </ul>
          <form onSubmit={handleSubmit} className="relative mt-2">
            <input
              required
              type="text"
              name="note"
              placeholder="Type your note..."
              className="px-2 py-1 border border-[white] bg-[black] text-[white] rounded-md w-full"
            />
            <button
              className="absolute text-[orange] top-1 right-2 underline"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </article>
  );
};

export default Challange24;
