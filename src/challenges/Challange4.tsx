const Challange4 = () => {
  const friends = [
    { id: 1, name: "John" },
    { id: 2, name: "Emily" },
    { id: 3, name: "Michael" },
    { id: 4, name: "Sarah" },
    { id: 5, name: "David" },
    { id: 6, name: "Alice" },
    { id: 7, name: "Bob" },
    { id: 8, name: "Clara" },
    { id: 9, name: "Eve" },
  ];

  return (
    <div className="flex flex-col justify-center items-center mt-[20%]">
      <ol className="text-[white] list-disc">
        {friends.map(({ id, name }) => {
          return <li key={id}>{name}</li>;
        })}
      </ol>
    </div>
  );
};

export default Challange4;
