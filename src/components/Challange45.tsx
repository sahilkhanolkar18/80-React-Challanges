import { useState } from "react";

const getRandomColor = () => {
  const colors = [
    "Aqua",
    "Black",
    "Blue",
    "Fuchsia",
    "Gray",
    "Green",
    "Lime",
    "Maroon",
    "Navy",
    "Olive",
    "Purple",
    "Red",
    "Silver",
    "Teal",
    "White",
    "Yellow",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

const Challange45 = () => {
  const [color, setColor] = useState(getRandomColor());
  const previousColor = usePrevious(color);

  const handleClick = () => {
    function getNewColor() {
      const newColor = getRandomColor();
      if (color === newColor) {
        getNewColor();
      } else {
        setColor(newColor);
      }
    }
    getNewColor();
  };

  return (
    <section className="flex flex-col h-full justify-center items-center text-[white]  gap-3">
      <h1 className="font-bold">usePrevious</h1>
      <button className="text-[orange]" onClick={handleClick}>
        Next
      </button>
      <article>
        <figure className="flex gap-4  items-center justify-center py-4 px-8 rounded-md">
          <div className="flex flex-col items-center gap-1 pt-2">
            <div //@ts-ignore
              style={{ backgroundColor: previousColor }}
              className="h-[150px] w-[150px] rounded-md"
            ></div>
            <figcaption>Previous: {previousColor}</figcaption>
          </div>
          <div className="flex flex-col items-center gap-1 pt-2">
            <div
              style={{ backgroundColor: color }}
              className="h-[150px] w-[150px] rounded-md"
            ></div>
            <figcaption>Current: {color}</figcaption>
          </div>
        </figure>
      </article>
    </section>
  );
};

const usePrevious = (value: any) => {
  const [current, setCurrent] = useState(value);
  const [previous, setPrevious] = useState(null);

  if (value !== current) {
    setPrevious(current);
    setCurrent(value);
  }

  return previous;
};

export default Challange45;
