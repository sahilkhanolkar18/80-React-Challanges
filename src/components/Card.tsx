import { useNavigate } from "react-router";

const Card = ({ index, label, image, isGridView }: any) => {
  const navigate = useNavigate();
  return (
    <div
      className={`${
        isGridView ? "" : "w-[70%]"
      } max-w-[850px]  m-auto mt-[35px] mb-[35px]  shadow-xl rounded-xl overflow-hidden`}
    >
      <div
        className={`${
          isGridView ? "h-[300px]" : "h-[450px]"
        } bg-white  shadow-sm `}
      >
        <img
          src={image}
          alt="Challenge Image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex justify-between items-center px-6 py-6">
        <div>
          <h1 className="text-md font-semibold underline mb-1 text-gray-700">
            Challenge #{index + 1}
          </h1>
          <p className="text-sm text-gray-700">{label}</p>
        </div>
        <div>
          <button
            className="px-6 py-2.5 bg-primary-300 hover:bg-primary-400 text-gray-700 rounded-md text-sm font-medium"
            onClick={() => navigate(`/${index + 1}`)}
          >
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
