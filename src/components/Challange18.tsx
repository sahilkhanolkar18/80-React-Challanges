import { useState } from "react";

const items = [
  "Apple",
  "Banana",
  "Cherry",
  "Date",
  "Fig",
  "Grape",
  "Honeydew",
  "Lemon",
  "Mango",
  "Nectarine",
  "Orange",
  "Papaya",
  "Raspberry",
  "Strawberry",
  "Watermelon",
];

const SearchFilter = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col w-[70%] m-auto  items-start h-full mt-20">
      <h1 className="text-[white] text-[20px] font-semibold">Search Filter</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="px-2 py-1 border border-[white] bg-[black] text-[white] rounded-sm w-full mt-1 mb-2"
      />
      <ul className="list-disc ml-5">
        {filteredItems.map((item) => (
          <li key={item} className="text-[white]">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Challange18 = () => {
  return <SearchFilter />;
};

export default Challange18;
