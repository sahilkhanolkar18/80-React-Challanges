import { useState, useLayoutEffect, useRef } from "react";

const Challange39 = () => {
  const ref = useRef(null);
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    const observer = new ResizeObserver(([entry]) => {
      //@ts-ignore
      setWidth(entry.contentRect.width);
    });
    //@ts-ignore
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="text-[white] h-full flex flex-col justify-center items-center p-4 ">
      <h1 className="text-2xl font-semibold mb-2">React Ruler</h1>
      <p className="mb-4">(Resize the ruler)</p>
      <article ref={ref} className="scale-css">
        {/*@ts-ignore*/}
        <label className="text-sm text-[white] font-mono">
          width: {Math.floor(width)}px
        </label>
      </article>
    </section>
  );
};

export default Challange39;
