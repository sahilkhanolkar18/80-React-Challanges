import { useState, useLayoutEffect, useRef } from "react";

const Challange39 = () => {
  const ref = useRef(null);
  const [width, setWidth] = useState(null);

  useLayoutEffect(() => {
    const observer = new ResizeObserver(([entry]) => {
      //@ts-ignore

      setWidth(entry.borderBoxSize[0].inlineSize);
    });
    //@ts-ignore

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section>
      <h1>React Ruler</h1>
      <p>(Resize the ruler)</p>
      <article ref={ref}>
        {/*@ts-ignore*/}
        <label>width: {Math.floor(width)}</label>
      </article>
    </section>
  );
};

export default Challange39;
