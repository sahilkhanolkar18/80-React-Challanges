import { useRef, useReducer, useCallback, useState } from "react";
import { DeleteIcon } from "~/assets/svgIcons";
const initialState = {
  past: [],
  present: null,
  future: [],
};

const reducer = (state: any, action: any) => {
  const { past, present, future } = state;

  if (action.type === "UNDO") {
    return {
      past: past.slice(0, past.length - 1),
      present: past[past.length - 1],
      future: [present, ...future],
    };
  } else if (action.type === "REDO") {
    return {
      past: [...past, present],
      present: future[0],
      future: future.slice(1),
    };
  } else if (action.type === "SET") {
    const { newPresent } = action;

    if (action.newPresent === present) {
      return state;
    }

    return {
      past: [...past, present],
      present: newPresent,
      future: [],
    };
  } else if (action.type === "CLEAR") {
    return {
      ...initialState,
      present: action.initialPresent,
    };
  } else {
    throw new Error("Unsupported action type");
  }
};

const useHistoryState = (initialPresent = {}) => {
  const initialPresentRef = useRef(initialPresent);

  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    present: initialPresent,
  });

  const canUndo = state.past.length !== 0;
  const canRedo = state.future.length !== 0;

  const undo = useCallback(() => {
    if (canUndo) {
      dispatch({ type: "UNDO" });
    }
  }, [canUndo]);

  const redo = useCallback(() => {
    if (canRedo) {
      dispatch({ type: "REDO" });
    }
  }, [canRedo]);

  const set = useCallback(
    (newPresent: any) => dispatch({ type: "SET", newPresent }),
    []
  );

  const clear = useCallback(
    () =>
      dispatch({ type: "CLEAR", initialPresent: initialPresentRef.current }),
    []
  );

  return { state: state.present, canUndo, canRedo, set, undo, redo, clear };
};

const Challange60 = () => {
  const [value, setValue] = useState("");
  const { state, set, undo, redo, clear, canUndo, canRedo } = useHistoryState({
    items: [],
  });
  console.log(state.items);

  const addTodo = (val: any) => {
    set({
      ...state,
      items: state.items.concat({ id: crypto.randomUUID(), name: val }),
    });
  };

  const removeTodo = (id: any) => {
    set({
      ...state,
      items: state.items.filter((item: any) => item.id !== id),
    });
  };

  return (
    <section className="h-full flex flex-col justify-center items-center gap-3 text-[white]">
      <h1 className="text-2xl font-bold">useHistoryState</h1>
      <div className="flex gap-4 text-[orange] underline">
        <button
          disabled={!canUndo}
          className={!canUndo ? "text-[gray] underline" : ""}
          onClick={undo}
        >
          Undo
        </button>
        <button
          disabled={!canRedo}
          className={!canRedo ? "text-[gray] underline" : ""}
          onClick={redo}
        >
          Redo
        </button>
        <button
          disabled={!state.items.length}
          className={!state.items.length ? "text-[gray] underline" : ""}
          onClick={clear}
        >
          Clear
        </button>
      </div>
      <div className="w-[420px] flex gap-2 ">
        <input
          type="text"
          placeholder="Add new todo "
          className="w-full border border-[white] px-2 py-2 rounded-md text-[black]"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          className="bg-[#f7a714c7] rounded-sm px-6"
          onClick={() => {
            if (value) {
              addTodo(value);
              setValue("");
            }
          }}
        >
          Add
        </button>
      </div>
      {state.items.map((item: any, index: any) => {
        return (
          <div
            key={index}
            className="w-[420px] bg-background rounded px-4 py-3 flex items-center justify-between gap-2"
          >
            {item.name}
            <button
              onClick={() => removeTodo(item.id)}
              className="p-2.5 bg-[#FFC7ED] rounded-full"
            >
              <DeleteIcon color={"#EB3678"} />
            </button>
          </div>
        );
      })}
    </section>
  );
};

export default Challange60;
