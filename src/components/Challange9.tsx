const Challange9 = () => {
  //Function to check char limit
  const handleChange = (event: any) => {
    if (event.target.value.length > 10) {
      alert("Character limit exceeded");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center align-middle gap-2 h-full">
      <p className="uppercase text-[white] font-semibold text-[24px]">
        Character Limit
      </p>
      <input
        type="text"
        className="px-2 py-1 border border-[white] bg-[black] text-[white] rounded-sm w-[500px]"
        placeholder="Enter text"
        onChange={handleChange}
      />
    </div>
  );
};

export default Challange9;
