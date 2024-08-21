import { useState, useRef, useLayoutEffect } from "react";

const useMouse = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0,
    elementX: 0,
    elementY: 0,
    elementPositionX: 0,
    elementPositionY: 0,
  });

  const ref = useRef(null);

  useLayoutEffect(() => {
    const handleMouseMove = (event: any) => {
      let newState = {
        x: event.pageX,
        y: event.pageY,
      };

      if (ref.current && ref.current.nodeType === Node.ELEMENT_NODE) {
        const { left, top } = ref.current.getBoundingClientRect();
        const elementPositionX = left + window.scrollX;
        const elementPositionY = top + window.scrollY;
        const elementX = event.pageX - elementPositionX;
        const elementY = event.pageY - elementPositionY;

        newState.elementX = elementX;
        newState.elementY = elementY;
        newState.elementPositionX = elementPositionX;
        newState.elementPositionY = elementPositionY;
      }

      setState((s) => {
        return {
          ...s,
          ...newState,
        };
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return [state, ref];
};
const Challange65 = () => {
  const [mouse, ref] = useMouse();

  const xIntersecting = mouse.elementX > 0 && mouse.elementX < 300;
  const yIntersecting = mouse.elementY > 0 && mouse.elementY < 300;
  const isIntersecting = xIntersecting && yIntersecting;

  console.log(mouse);
  return (
    <section className="h-full flex flex-col justify-center items-center gap-3 text-[white] cursor-crosshair relative overflow-hidden">
      <h1 className="text-2xl text-bold">useMouse</h1>
      <article
        ref={ref}
        className={`${
          isIntersecting ? "bg-background" : ""
        } h-[350px] w-[350px] flex justify-center items-center text-center border border-dashed rounded-lg p-5`}
      >
        Use a ref to add coords relative to the element
      </article>
      <div
        style={{
          transform: `translate(${mouse.x - 410}px, ${mouse.y - 430}px)`,
        }}
        className="absolute bg-[black] p-2 rounded-md"
      >
        <p>X: {mouse.x}</p>
        <p>Y: {mouse.y}</p>

        <p>elementX: {mouse.elementX}</p>
        <p>elementY: {mouse.elementY}</p>
      </div>
    </section>
  );
};

export default Challange65;
