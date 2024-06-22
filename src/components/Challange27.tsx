import { useState, useRef } from "react";

const Challenge27 = () => {
  const ref = useRef(null);
  const [position, setPosition] = useState([0, 0]);

  const handleClick = ({ clientX, clientY }: any) => {
    //@ts-ignore
    const { width, height } = ref.current.getBoundingClientRect();
    console.log(clientX, clientY);
    console.log([clientX - width / 2, clientY - height / 2]);

    setPosition([clientX - width / 2, clientY - height / 2]);
    // setPosition([clientX, clientY]);
  };

  return (
    <div
      className="relative h-[100dvh] w-[100dvw] cursor-crosshair overflow-hidden "
      onClick={handleClick}
    >
      <div
        ref={ref}
        className="absolute bg-[orange] h-[50px] w-[50px] "
        style={{
          transform: `translate(${position[0]}px, ${position[1]}px)`,
          transition: "transform 1s ease-in-out",
        }}
      />
    </div>
  );
};

export default Challenge27;
