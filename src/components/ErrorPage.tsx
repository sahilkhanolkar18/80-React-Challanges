import Image from "../assets/not-found.svg";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-[150px]">
      <img src={Image} alt="Not Found" className="h-[350px] m-auto" />
      <h3 className="text-center mt-2">Ohh! page not found</h3>
      <p className="text-center mt-2">
        we can't seem to find the page you are looking for
      </p>
      <button className="ml-[48%] mt-4">
        <span
          className="text-center text-sm bg-[#f59f0094] hover:bg-[#f59f0079] px-2 py-2 rounded-md"
          onClick={() => navigate("/")}
        >
          Back home
        </span>
      </button>
    </div>
  );
};

export default NotFound;
