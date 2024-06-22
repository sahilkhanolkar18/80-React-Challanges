import { useReducer } from "react";

const initialState = {
  past: [],
  present: 0,
  future: [],
};

const reducer = (state: any, action: any) => {
  const { past, present, future } = state;

  if (action.type === "increment") {
    return {
      past: [...past, present],
      present: present + 1,
      future: [],
    };
  }

  if (action.type === "decrement") {
    return {
      past: [...past, present],
      present: present - 1,
      future: [],
    };
  }

  if (action.type === "undo") {
    return {
      past: past.slice(0, -1),
      present: past.at(-1),
      future: [present, ...future],
    };
  }

  if (action.type === "redo") {
    return {
      past: [...past, present],
      present: future[0],
      future: future.slice(1),
    };
  }

  throw new Error("This action type isn't supported.");
};

const Challange35 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleIncrement = () => dispatch({ type: "increment" });
  const handleDecrement = () => dispatch({ type: "decrement" });
  const handleUndo = () => dispatch({ type: "undo" });
  const handleRedo = () => dispatch({ type: "redo" });

  return (
    <div className="text-[white] flex flex-col justify-center items-center h-full gap-2">
      <h1 className="text-[22px] font-semibold">COUNTER: {state.present}</h1>
      <div className="text-sm flex gap-2 underline text-[orange]">
        <button className="link" onClick={handleIncrement}>
          Increment
        </button>
        <button className="link" onClick={handleDecrement}>
          Decrement
        </button>
        <button
          className="link"
          onClick={handleUndo}
          disabled={!state.past.length}
        >
          Undo
        </button>
        <button
          className="link"
          onClick={handleRedo}
          disabled={!state.future.length}
        >
          Redo
        </button>
      </div>
    </div>
  );
};

export default Challange35;
