import { Link } from "react-router-dom";

// const ConceptsArray = [
//   {
//     id: 1,
//     name: "First",
//   },
//   {
//     id: 2,
//     name: "Second",
//   },
// ];

const SideBar = ({ Snippents }: any) => {
  return (
    <div className=" bg-gray-100 py-4 rounded-lg  mobile:hidden">
      {/* <h1 className="text-gray-700 px-6 font-semibold text-md mb-1">
        Core Concepts:
      </h1>
      <hr className="text-gray-800 w-[90%] m-auto mb-2" />
      {ConceptsArray.map((data) => {
        return (
          <div
            key={data.id}
            className="text-gray-700 flex gap-1 text-sm px-6 py-0.5 cursor-pointer"
          >
            <p className="w-5">{data.id}.</p>
            <p className="hover:underline">{data.name}</p>
          </div>
        );
      })}
      <div className="mt-3"></div> */}
      <h1 className="text-gray-700 px-6 font-semibold text-md mb-1">
        Challenges:
      </h1>{" "}
      <hr className="text-gray-800 w-[90%] m-auto my-2" />
      {Snippents.map((data: any) => {
        if (data.id === 42) {
          return (
            <>
              {
                <div className="">
                  <div className="mt-3"></div>
                  <h1 className="text-gray-800 px-6 font-semibold text-md mb-1">
                    Custom Hooks:
                  </h1>
                  <hr className="text-gray-800 w-[90%] m-auto my-2" />
                </div>
              }
              <div
                key={data.id}
                className="text-gray-700 flex gap-1 text-sm px-6 py-0.5 cursor-pointer"
              >
                <p className="w-5">{data.id}.</p>
                <Link to={`/${data.id}`} className="hover:underline">
                  {data.name}
                </Link>
              </div>
            </>
          );
        }
        return (
          <div
            key={data.id}
            className="text-gray-700 flex gap-1 text-sm px-6 py-0.5 cursor-pointer"
          >
            <p className="w-5">{data.id}.</p>
            <Link to={`/${data.id}`} className="hover:underline">
              {data.name}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default SideBar;
