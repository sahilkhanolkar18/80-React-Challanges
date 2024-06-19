import Image from "../assets/me.jpg";

const Badge = ({ name, img, handle, children }: any) => {
  return (
    <div className="bg-[#343a40] text-center h-[400px] w-[350px] m-auto mt-[13%] rounded-md flex flex-col items-center justify-center border border-[#868e96]">
      <div className="h-[220px] flex flex-col items-center justify-center">
        <img
          alt={`Avatar for ${name}`}
          src={img}
          className="h-[200px] w-[200px] rounded-full"
        />
      </div>
      <div className="w-full py-2">
        <h4 className="font-bold text-md text-[white] ">{name}</h4>
        <h6 className="text-sm font-semibold text-[white] text-[#f3a007]">
          @{handle}
        </h6>
      </div>
      {children}
    </div>
  );
};

const Challange8 = () => {
  const handleAddFriend = () => alert("Added");

  return (
    <Badge name="SAHIL KHANOLKAR" handle="SahilKhanolkar" img={Image}>
      <p className="text-sm text-[white] w-[300px]">
        Alex enjoys running, surfing, and binge watching the Twilight series.
      </p>
      <button
        onClick={handleAddFriend}
        className="py-2 px-5 mt-2 bg-[#f3a007] hover:bg-[#f59f008a]  rounded-md"
      >
        Add Friend
      </button>
    </Badge>
  );
};

export default Challange8;
