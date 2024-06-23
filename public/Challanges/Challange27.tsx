import { useState, useRef } from "react";

const Challenge27 = () => {
  const ref = useRef(null);
  const [position, setPosition] = useState([0, 0]);

  const handleClick = ({ clientX, clientY }: any) => {
    //@ts-ignore
    const { width, height } = ref.current.getBoundingClientRect();
    //@ts-ignore
    const { left, top } = ref.current.parentElement.getBoundingClientRect();

    const x = clientX - left - width / 2;
    const y = clientY - top - height / 2;

    setPosition([x, y]);

    console.log([x, y]);
  };

  return (
    <div
      className="h-full w-full cursor-crosshair  m-auto  relative overflow-hidden"
      onClick={handleClick}
    >
      <div
        ref={ref}
        className="absolute bg-[orange] h-[50px] w-[50px]"
        style={{
          transform: `translate(${position[0]}px, ${position[1]}px)`,
          transition: "transform 1s ease-in-out",
        }}
      />
    </div>
  );
};

export default Challenge27;
