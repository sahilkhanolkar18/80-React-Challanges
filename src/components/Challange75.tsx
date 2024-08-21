import React from "react";

const throttle = (cb: any, ms: any) => {
  let lastTime = 0;
  return () => {
    const now = Date.now();
    if (now - lastTime >= ms) {
      cb();
      lastTime = now;
    }
  };
};

const useIdle = (ms = 1000 * 20) => {
  const [idle, setIdle] = React.useState(false);

  React.useEffect(() => {
    //@ts-ignore
    let timeoutId;

    const handleTimeout = () => {
      setIdle(true);
    };

    const handleEvent = throttle(() => {
      setIdle(false);
      //@ts-ignore
      window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(handleTimeout, ms);
    }, 500);

    const handleVisibilityChange = () => {
      if (!document.hidden) {
        handleEvent();
      }
    };

    timeoutId = window.setTimeout(handleTimeout, ms);

    window.addEventListener("mousemove", handleEvent);
    window.addEventListener("mousedown", handleEvent);
    window.addEventListener("resize", handleEvent);
    window.addEventListener("keydown", handleEvent);
    window.addEventListener("touchstart", handleEvent);
    window.addEventListener("wheel", handleEvent);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("mousemove", handleEvent);
      window.removeEventListener("mousedown", handleEvent);
      window.removeEventListener("resize", handleEvent);
      window.removeEventListener("keydown", handleEvent);
      window.removeEventListener("touchstart", handleEvent);
      window.removeEventListener("wheel", handleEvent);
      document.removeEventListener("visibilitychange", handleVisibilityChange); //@ts-ignore
      window.clearTimeout(timeoutId);
    };
  }, [ms]);

  return idle;
};
const Challange75 = () => {
  const idle = useIdle(5000);

  return (
    <section className="h-full flex flex-col items-center justify-center gap-3 text-[white]">
      <h1 className="text-2xl font-bold">useIdle</h1>
      <div>
        <span
          className={`w-3 h-3 rounded-full inline-flex ${
            idle ? "bg-[yellow]" : " bg-[green]"
          }`}
        ></span>{" "}
        <label>Status: {idle ? "Idle" : "Active"}</label>
      </div>
      <div className="text-sm text-[orange]">
        {idle ? <p>Time to move your mouse</p> : <p>Hold still and wait</p>}
      </div>
    </section>
  );
};

export default Challange75;
