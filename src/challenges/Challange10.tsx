const Input = ({ characterLimit }: any) => {
  const handleChange = (event: any) => {
    if (event.target.value.length > characterLimit) {
      alert("Character limit exceeded");
    }
  };
  return (
    <input
      onChange={handleChange}
      className="px-2 py-1 border border-[white] bg-[black] text-[white] rounded-sm w-[500px]"
      placeholder="Enter text"
    />
  );
};

const Challange10 = () => {
  return (
    <div className="flex flex-col justify-center items-center align-middle gap-2 h-full">
      <p className="uppercase text-[white] font-semibold text-[24px]">
        Character Limit
      </p>
      <Input characterLimit={20} />
    </div>
  );
};

export default Challange10;
