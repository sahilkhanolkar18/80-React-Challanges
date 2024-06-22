import { useState, useRef } from "react";

const Challenge27 = () => {
  const ref = useRef(null);
  const [position, setPosition] = useState([0, 0]);

  const handleClick = ({ clientX, clientY }: any) => {
    const { width, height } = ref.current.getBoundingClientRect();
    setPosition([clientX - width / 2, clientY - height / 2]);
  };

  return (
    <div
      className="h-screen cursor-crosshair overflow-hidden relative"
      onClick={handleClick}
    >
      <div
        ref={ref}
        className="bg-orange-500 h-10 w-10 absolute"
        style={{
          transform: `translate(${position[0]}px, ${position[1]}px)`,
          transition: "transform 1s ease-in-out",
        }}
      />
    </div>
  );
};

export default Challenge27;
