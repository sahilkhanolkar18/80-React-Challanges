import { useState, useCallback } from "react";

const Challange44 = () => {
  const [on, toggle] = useToggle(true);

  return (
    <section className="h-full flex flex-col justify-center text-[white] items-center gap-2">
      <h1 className="font-semibold">UseToggle</h1>
      <div className="flex gap-4 text-[orange] underline">
        <button //@ts-ignore
          disabled={on}
          className={on ? "text-[grey] underline" : ""} //@ts-ignore
          onClick={() => toggle(true)}
        >
          Turn On
        </button>
        <button
          disabled={!on}
          className={!on ? "text-[grey] underline" : ""} //@ts-ignore
          onClick={() => toggle(false)}
        >
          Turn Off
        </button>
        <button //@ts-ignore
          onClick={toggle}
        >
          Toggle
        </button>

        <button //@ts-ignore
          onClick={() => toggle("nope")}
        >
          (Also toggles)
        </button>
      </div>
      <ToggleDemo on={on} toggle={toggle} />
    </section>
  );
};

const useToggle = ({ initialValue = true }: any) => {
  const [on, setOn] = useState(() => {
    if (typeof initialValue === "boolean") {
      return initialValue;
    }
    return Boolean(initialValue);
  });

  const handleToggle = useCallback((value: any) => {
    if (typeof value === "boolean") {
      return setOn(value);
    }
    return setOn((v) => !v);
  }, []);

  return [on, handleToggle];
};

const ToggleDemo = ({ on, toggle }: any) => {
  return (
    <div className="flex items-center">
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          onChange={toggle}
          className="sr-only peer"
          type="checkbox"
          checked={on}
        />
        <div className="w-11 h-6 bg-[gray] peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[lightblue] rounded-full peer dark:bg-[darkgray] peer-checked:bg-[green]"></div>
        <div
          className={`absolute left-1 top-1 bg-[white] w-4 h-4 rounded-full transition-transform duration-200 transform ${
            on ? "translate-x-5" : ""
          }`}
        ></div>
      </label>
      <span className="ml-3 text-sm font-medium text-[gray]">
        {on ? "On" : "Off"}
      </span>
    </div>
  );
};

export default Challange44;
