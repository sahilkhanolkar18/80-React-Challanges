import { useState } from "react";
import Card from "~/components/Card";
import Me from "../assets/me.jpg";
import Snippents from "~/data/data";
import { ReactLogo } from "../assets/svgIcons";
import { ListIcon, GridIcon, Chevron } from "../assets/svgIcons";

const Home = () => {
  const [isGridView, setIsGridView] = useState(false);
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSort = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  // Sort the Snippents based on id
  const sortedSnippents = [...Snippents].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.id - b.id;
    } else {
      return b.id - a.id;
    }
  });

  return (
    <div className="relative m-0">
      <div className="absolute left-8 top-0 flex gap-2 justify-center items-center">
        <ReactLogo />
        <p className="font-semibold text-[20px] text-[#343a40]">
          {"React Dev </>"}
        </p>
      </div>
      <h1 className="text-center mt-4 font-semibold text-[24px] mb-4 text-[#212529] ">
        80 React.js Challenges🔥
      </h1>
      <hr className="mx-[20px] text-[#868e96]" />

      {/* View and Sorting Controls */}
      <div className="flex  gap-4 my-4 mx-8">
        <div className="bg-[#e9ecef] rounded px-2 py-1 flex justify-center items-center gap-1">
          <button
            onClick={() => {
              setIsGridView(false);
            }}
            className={`${
              isGridView ? "" : "bg-[#f59f0094]"
            } px-4 py-2  rounded flex justify-center items-center gap-1`}
          >
            {" "}
            <ListIcon />
            List View
          </button>
          <button
            onClick={() => {
              setIsGridView(true);
            }}
            className={`${
              isGridView ? "bg-[#f59f0094]" : ""
            } px-4 py-2  rounded flex justify-center items-center gap-1`}
          >
            <GridIcon />
            Grid View
          </button>
        </div>
        <button
          onClick={handleSort}
          className="px-4 py-2 bg-green-500 text-white rounded flex justify-center items-center"
        >
          Sort by ID: {sortOrder === "asc" ? "Ascending" : "Descending"}
          <Chevron />
        </button>
      </div>

      {/* Snippets Section */}
      <div
        className={`${
          isGridView
            ? "grid grid-cols-4 mobile:grid-cols-1 laptop:grid-cols-3 desktop:grid-cols-4 gap-4 mx-4"
            : "flex flex-col"
        }`}
      >
        {sortedSnippents.map((item, index) => (
          <Card
            key={index}
            label={item.name}
            index={item.id - 1}
            image={item.image}
            isGridView={isGridView}
          />
        ))}
      </div>

      {/* User Profile */}
      <div className="absolute top-0 right-10 flex gap-2 ">
        <div className="w-11 h-11 rounded-full overflow-hidden border border-[#da6c36] border-[2px]">
          <img src={Me} alt="me" />
        </div>
        <div className="flex flex-col items-center relative">
          <p className="text-sm mt-1">Sahil Khanolkar</p>
          <a
            href={`https://github.com/sahilkhanolkar18`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[12px] underline absolute bottom-1 right-8"
          >
            Git Hub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
