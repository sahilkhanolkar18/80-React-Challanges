import { useState, useEffect } from "react";

const useIsClient = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
};

const Challange81 = () => {
  const isClient = useIsClient();

  return (
    <section className="h-full flex flex-col justify-center items-center gap-3 text-[white]">
      <h1 className="text-2xl text-bold">useIsClient</h1>
      <h6 className="">Is Client? </h6>
      <p className=" text-[orange]">
        {isClient ? "it's safe to run certain client-only hooks" : "No"}
      </p>
    </section>
  );
};

export default Challange81;
