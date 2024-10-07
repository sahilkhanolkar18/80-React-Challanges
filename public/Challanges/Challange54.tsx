import { useState, useLayoutEffect } from "react";

const Browser = ({ size }: any) => {
  return (
    <div
      data-testid="browser"
      className="browser"
      style={{ width: size.width / 4, height: size.height / 4 }}
    />
  );
};

const useWindowSize = () => {
  const [size, setSize] = useState({
    width: null,
    height: null,
  });

  useLayoutEffect(() => {
    const handler = () => {
      setSize({
        //@ts-ignore

        width: window.innerWidth, //@ts-ignore

        height: window.innerHeight,
      });
    };

    handler();
    window.addEventListener("resize", handler);

    return () => {
      window.removeEventListener("resize", handler);
    };
  }, []);

  return size;
};

const Challange54 = () => {
  const size = useWindowSize();

  return (
    <section className="-lg h-full flex flex-col justify-center items-center">
      <div className="p-6 bg-[#EBD3F8] h-[45%] w-[70%] rounded">
        <h1 className="text-2xl font-bold text-[#7A1CAC] mb-4">
          useWindowSize
        </h1>
        <p className="text-lg mb-6">Resize the window</p>
        <table className="min-w-full bg-white rounded-lg overflow-hidden">
          <tbody>
            <tr className="border-b">
              <th className="py-2 px-4 text-left text-[black] font-medium">
                width
              </th>
              <td className="py-2 px-4 text-gray-900">{size.width}px</td>
            </tr>
            <tr>
              <th className="py-2 px-4 text-left text-gray-700 font-medium">
                height
              </th>
              <td className="py-2 px-4 text-gray-900">{size.height}px</td>
            </tr>
          </tbody>
        </table>
        <div className="mt-6">
          <Browser size={size} />
        </div>
      </div>
    </section>
  );
};

export default Challange54;
