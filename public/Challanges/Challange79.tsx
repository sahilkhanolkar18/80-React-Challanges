import { useSyncExternalStore, useCallback, useEffect, useRef } from "react";

const dispatchStorageEvent = (key: any, newValue: any) => {
  window.dispatchEvent(new StorageEvent("storage", { key, newValue }));
};

const setItem = (key: any, value: any) => {
  const stringifiedValue = JSON.stringify(value);
  window.localStorage.setItem(key, stringifiedValue);
  dispatchStorageEvent(key, stringifiedValue);
};

const removeItem = (key: any) => {
  window.localStorage.removeItem(key);
  dispatchStorageEvent(key, null);
};

const getItem = (key: any) => {
  return window.localStorage.getItem(key);
};

const subscribe = (callback: any) => {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
};

const getServerSnapshot = () => {
  throw Error("useLocalStorage is a client-only hook");
};

const useLocalStorage = (key: any, initialValue: any) => {
  const getSnapshot = () => getItem(key);

  const store = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setState = useCallback(
    (v: any) => {
      try {
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

const createDrawing = (canvas, drawing, saveDrawing) => {
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let isDrawing = false;
  let lastX = 0;
  let lastY = 0;

  // Initialize canvas with the previous drawing if available
  if (drawing) {
    const img = new Image();
    img.src = drawing;
    img.onload = () => {
      ctx.drawImage(img, 0, 0);
    };
  }

  // Start drawing
  const startDrawing = (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
  };

  // Stop drawing
  const stopDrawing = () => {
    isDrawing = false;
    ctx.beginPath();

    // Save the current canvas state to local storage
    saveDrawing(canvas.toDataURL());
  };

  // Drawing on the canvas
  const draw = (e) => {
    if (!isDrawing) return;
    ctx.lineWidth = 5;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.strokeStyle = "#FF6347"; // Tomato color

    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
  };

  // Event listeners for mouse actions
  canvas.addEventListener("mousedown", startDrawing);
  canvas.addEventListener("mousemove", draw);
  canvas.addEventListener("mouseup", stopDrawing);
  canvas.addEventListener("mouseout", stopDrawing);
};

const Challange79 = () => {
  const [drawing, saveDrawing] = useLocalStorage("drawing", null);
  const ref = useRef(null);
  useEffect(() => {
    createDrawing(ref.current, drawing, saveDrawing);
  }, [drawing, saveDrawing]);
  return (
    <section className="h-full flex flex-col justify-center items-center gap-3 text-[white]">
      <header>
        <h1 className="text-2xl font-bold text-center">useLocalStorage</h1>
        <div className="text-[orange] flex gap-5 underline">
          <button className="link" onClick={() => window.location.reload()}>
            Reload Window
          </button>
          <button
            className="link"
            onClick={() => {
              window.localStorage.clear();
              window.location.reload();
            }}
          >
            Clear Local Storage
          </button>
        </div>
      </header>
      <figure className=" flex flex-col justify-center items-center gap-2 rounded">
        <canvas
          ref={ref}
          width={300}
          height={300}
          className="bg-[#7A1CAC] rounded"
        />
        <figcaption>(draw something)</figcaption>
      </figure>
    </section>
  );
};

export default Challange79;
