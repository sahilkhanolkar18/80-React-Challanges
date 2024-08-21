import { useLayoutEffect, useState } from "react";

const useOrientation = () => {
  const [orientation, setOrientation] = useState({
    angle: 0,
    type: "UNKNOWN",
  });

  useLayoutEffect(() => {
    const handleChange = () => {
      const { angle, type } = window.screen.orientation;
      setOrientation({
        angle,
        type,
      });
    };

    const handle_orientationchange = () => {
      setOrientation({
        type: "UNKNOWN",
        angle: window.orientation || 0, // Handle case where window.orientation is undefined
      });
    };

    if (window.screen?.orientation) {
      handleChange();
      window.screen.orientation.addEventListener("change", handleChange);
    } else {
      handle_orientationchange();
      window.addEventListener("orientationchange", handle_orientationchange);
    }

    return () => {
      if (window.screen?.orientation) {
        window.screen.orientation.removeEventListener("change", handleChange);
      } else {
        window.removeEventListener(
          "orientationchange",
          handle_orientationchange
        );
      }
    };
  }, []);

  return orientation;
};

const Challange69 = () => {
  const orientation = useOrientation();
  console.log(orientation);
  return (
    <section className="h-full flex flex-col justify-center items-center gap-20 text-[white]">
      <h1 className="text-2xl font-bold">useOrientation</h1>

      <div
        style={{
          transform: `rotate(${orientation.angle}deg)`,
          transition: "transform 0.3s ease-in-out", // Optional for smooth transitions
        }}
        className={`h-[100px] w-[200px] bg-[#005fa728] border border-[#9638c9] rounded`}
      />
      <div>
        <table>
          <tbody>
            {Object.keys(orientation).map((key) => {
              return (
                <tr key={key}>
                  <th className="text-[orange] pr-2 font-semibold">{key} : </th>
                  <td> {orientation[key]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Challange69;
