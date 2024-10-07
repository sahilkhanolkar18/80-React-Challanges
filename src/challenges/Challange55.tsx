import { useSyncExternalStore, useState, useEffect } from "react";

const subscribe = (callback: any) => {
  document.addEventListener("visibilitychange", callback);

  return () => {
    document.removeEventListener("visibilitychange", callback);
  };
};

const getSnapshot = () => {
  return document.visibilityState;
};

const getServerSnapshot = () => {
  throw Error("useVisibilityChange is a client-only hook");
};

const useVisibilityChange = () => {
  const visibilityState = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  return visibilityState === "visible";
};

const Challange55 = () => {
  const documentVisible = useVisibilityChange();
  const [tabAwayCount, setTabAwayCount] = useState(0);

  useEffect(() => {
    if (documentVisible === false) {
      setTabAwayCount((c) => c + 1);
    }
  }, [documentVisible]);

  return (
    <section className="h-full flex flex-col justify-center items-center gap-3 text-[white]">
      <h1 className="text-2xl text-bold">useVisibilityChange</h1>
      <div className="text-[orange]">Tab Away Count: {tabAwayCount}</div>
      <p className="text-sm text-[green]">
        Open a new tab and switch back to the tab to see the count.
      </p>
    </section>
  );
};

export default Challange55;
