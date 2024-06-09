const Challange2 = () => {
  const getTodaysDate = () => {
    const today = new Date();
    return today.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });
  };

  return (
    <div className=" h-full flex items-center justify-center">
      <p className="text-[white]">Today is {getTodaysDate()}</p>
    </div>
  );
};

export default Challange2;
