import { useState } from "react";

const Challange43 = () => {
  const initialState = { name: "Tyler" };
  const defaultState = { name: "Ben" };

  const [user, setUser] = useDefault(initialState, defaultState);
  return (
    <section className="h-full flex flex-col text-[white] justify-center items-center gap-2">
      <h1 className="font-semibold">USEDEFAULT</h1>
      <div className="text-[orange] flex gap-2 underline">
        <button
          title="Sets the value to Lynn"
          className="link"
          onClick={() => setUser({ name: "Lynn" })}
        >
          Lynn
        </button>
        <button
          title="Sets the value to Tyler"
          className="link"
          onClick={() => setUser({ name: "Tyler" })}
        >
          Tyler
        </button>
        <button
          title="Sets the value to null causing it to use the default value"
          className="link"
          onClick={() => setUser(null)}
        >
          null
        </button>
      </div>
      <pre>
        <code>{JSON.stringify(user)}</code>
      </pre>
    </section>
  );
};

const useDefault = (initialState: any, defaultState: any) => {
  const [state, setState] = useState(initialState);

  if (typeof state === "undefined" || state === null) {
    return [defaultState, setState];
  }
  return [state, setState];
};

export default Challange43;
