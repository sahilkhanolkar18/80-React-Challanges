import { useEffect, useState } from "react";

const usePageLeave = (cb: any) => {
  const onLeave = (event: MouseEvent) => {
    //@ts-ignore
    const to = event.relatedTarget || event.toElement;
    if (!to || to.nodeName === "HTML") {
      cb();
    }
  };

  useEffect(() => {
    document.addEventListener("mouseout", onLeave);

    return () => {
      document.removeEventListener("mouseout", onLeave);
    };
  }, []); // Empty dependency array ensures this effect runs once
};

const Challange71 = () => {
  const [distractions, setDistractions] = useState(0);

  usePageLeave(() => {
    setDistractions((d) => d + 1);
  });

  return (
    <section className="h-full flex flex-col justify-center items-center gap-3 text-[white]">
      <h1 className="text-2xl text-bold">usePageLeave</h1>
      <p className="text-[orange] text-sm">(Mouse out of the page)</p>
      <h3>
        You've been distracted {distractions}{" "}
        {distractions === 1 ? "time" : "times"}.
      </h3>
    </section>
  );
};

export default Challange71;
