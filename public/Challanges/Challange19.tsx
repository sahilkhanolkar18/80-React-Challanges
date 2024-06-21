import { useState, useEffect } from "react";

const Challange19 = () => {
  const [time, setTime] = useState<any>(null);

  useEffect(() => {
    const timerID = window.setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      window.clearInterval(timerID);
    };
  }, []);

  if (time === null) return null;
  return (
    <section className="flex flex-col items-center justify-center h-full">
      <h1 className="font-semibold text-[white] text-[20px] ">Current Time</h1>
      <p className="text-[white]">{time.toLocaleTimeString()}</p>
    </section>
  );
};

export default Challange19;
