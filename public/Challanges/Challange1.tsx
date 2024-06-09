import Image from "../assets/me.jpg";

const Card = () => {
  const name = "SAHIL KHANOLKAR";
  const handle = "SahilKhanolkar";
  const profileImage = Image;

  return (
    <div className="bg-[#343a40] text-center h-[400px] w-[350px] m-auto mt-[15%] rounded-md flex flex-col items-center justify-center border border-[#868e96]">
      <div className="h-[270px] flex flex-col items-center justify-center">
        <img
          src={profileImage}
          alt={`Avatar for ${name}`}
          className="h-[240px] w-[240px] rounded-full"
        />
      </div>
      <div className="w-full py-2">
        <h4 className="font-bold text-md text-[white]">{name}</h4>
        <p className="text-sm font-semibold text-[white]">@{handle}</p>
      </div>
    </div>
  );
};

const Challange1 = () => {
  return <Card />;
};

export default Challange1;
