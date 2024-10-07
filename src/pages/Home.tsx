import { useState } from "react";
import Card from "~/components/Card";
import Snippents from "~/data/data";
import { ListIcon, GridIcon } from "../assets/svgIcons";
import Header from "~/components/Header";

const Home = () => {
  const [isGridView, setIsGridView] = useState(false);
  const [sortOrder, setSortOrder] = useState("desc");

  const handleSort = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const sortedSnippents = [...Snippents].sort((a, b) => {
    return sortOrder === "asc" ? a.id - b.id : b.id - a.id;
  });

  return (
    <div className="relative m-0">
      <Header />

      {/* View Toggle & Sort Section */}
      <div className="flex gap-0 my-4 mx-8">
        <div className="bg-gray-100 rounded-md px-2 py-1 flex justify-center items-center gap-1">
          <button
            onClick={() => setIsGridView(false)}
            className={`${
              isGridView ? "" : "bg-primary-300"
            } px-2 py-2 rounded-md flex justify-center items-center gap-1 transition-colors duration-300`}
          >
            <ListIcon />
            <p className="text-sm text-gray-700">List View</p>
          </button>
          <button
            onClick={() => setIsGridView(true)}
            className={`${
              isGridView ? "bg-primary-300" : ""
            } px-2 py-2 rounded-md flex justify-center items-center gap-1 transition-colors duration-300`}
          >
            <GridIcon />
            <p className="text-sm text-gray-700">Grid View</p>
          </button>
        </div>

        {/* Sort Button */}
        <button
          onClick={handleSort}
          className="px-4 py-2 text-sm rounded flex justify-center items-center gap-0.5 text-gray-700"
        >
          Order
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            viewBox="0 -960 960 960"
            width="20px"
            fill="#374151"
            className={`transition-transform duration-300 ${
              sortOrder === "asc" ? "rotate-0" : "rotate-180"
            }`}
          >
            <path d="M480-525 291-336l-51-51 240-240 240 240-51 51-189-189Z" />
          </svg>
        </button>
      </div>
      <hr className="w-[98%] m-auto" />

      {/* Snippets Section */}
      <div
        className={`${
          isGridView
            ? "grid grid-cols-4 mobile:grid-cols-1 laptop:grid-cols-3 desktop:grid-cols-3 gap-10 desktop:mx-32 laptop:mx-12 "
            : "flex flex-col"
        } transition-all duration-300 ease-in-out`}
      >
        {sortedSnippents.map((item) => (
          <Card
            key={item.id}
            label={item.name}
            index={item.id - 1}
            image={item.image}
            isGridView={isGridView}
            className="transition-opacity transform duration-300 ease-in-out opacity-0 animate-fade-in"
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
