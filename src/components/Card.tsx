import { useNavigate } from "react-router";

const Card = ({ index, label, image }: any) => {
  const navigate = useNavigate();
  return (
    <div className="w-[70%] max-w-[850px]  bg-[#f1f3f5]  m-auto mt-[35px] mb-[35px] p-8  rounded-md shadow-md">
      <div className="h-[450px] bg-white mb-4 shadow-sm rounded-sm overflow-hidden">
        <img
          src={image}
          alt="Challenge Image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-md font-semibold underline mb-1 text-[#212529]">
            Challenge #{index + 1}
          </h1>
          <p className="text-sm text-[#212529]">{label}</p>
        </div>
        <div>
          <button
            className="px-6 py-2 bg-[#f59f0094] hover:bg-[#f59f0079] text-[#212529]  rounded-md text-sm"
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
