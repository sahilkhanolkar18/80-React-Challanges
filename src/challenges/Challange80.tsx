import { useSyncExternalStore, useCallback, useEffect } from "react";
import { Cart } from "~/assets/svgIcons";
const useSessionStorage = (key: any, initialValue: any) => {
  const getSnapshot = () => getItem(key);

  const store = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setState = useCallback(
    (v: any) => {
      try {
        //@ts-ignore
        const nextState = typeof v === "function" ? v(JSON.parse(store)) : v;

        if (nextState === undefined || nextState === null) {
          removeItem(key);
        } else {
          setItem(key, nextState);
        }
      } catch (e) {
        console.warn(e);
      }
    },
    [key, store]
  );

  useEffect(() => {
    if (getItem(key) === null && typeof initialValue !== "undefined") {
      setItem(key, initialValue);
    }
  }, [key, initialValue]);

  return [store ? JSON.parse(store) : initialValue, setState];
};

const dispatchStorageEvent = (key: any, newValue: any) => {
  window.dispatchEvent(new StorageEvent("storage", { key, newValue }));
};

const setItem = (key: any, value: any) => {
  const stringifiedValue = JSON.stringify(value);
  window.sessionStorage.setItem(key, stringifiedValue);
  dispatchStorageEvent(key, stringifiedValue);
};

const removeItem = (key: any) => {
  window.sessionStorage.removeItem(key);
  dispatchStorageEvent(key, null);
};

const getItem = (key: any) => {
  return window.sessionStorage.getItem(key);
};

const subscribe = (callback: any) => {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
};

const getServerSnapshot = () => {
  throw Error("useSessionStorage is a client-only hook");
};

const Challange80 = () => {
  const [count, setCount] = useSessionStorage("woot", 0);

  return (
    <section className="h-full flex flex-col justify-center items-center gap-3 text-[white]">
      <h1 className="text-2xl font-bold">useSessionStorage</h1>

      <div className="text-[orange] underline flex gap-5">
        <button onClick={() => setCount(0)}>Clear Cart</button>
        <button
          onClick={() => {
            window.location.reload();
          }}
        >
          Reload Window
        </button>
        <button
          onClick={() => {
            window.sessionStorage.clear();
            window.location.reload();
          }}
        >
          Clear Session
        </button>
      </div>

      <button
        className="bg-[#f59f00fb] rounded px-3 py-2 text-[black] flex justify-center items-center gap-2"
        onClick={() => setCount(count + 1)}
      >
        <span>
          <Cart />
        </span>{" "}
        Add To Cart
      </button>
    </section>
  );
};

export default Challange80;
