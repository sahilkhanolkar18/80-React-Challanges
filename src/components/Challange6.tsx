import Image from "../assets/me.jpg";

const USER_DATA = {
  name: "SAHIL KHANOLKAR",
  profileImage: Image,
  handle: "SahilKhanolkar",
};

const Card = ({ user }: any) => {
  return (
    <div className="bg-[#343a40] text-center h-[400px] w-[350px] m-auto mt-[13%] rounded-md flex flex-col items-center justify-center border border-[#868e96]">
      <div className="h-[270px] flex flex-col items-center justify-center">
        <img
          src={user.profileImage}
          alt={`Avatar for ${user.name}`}
          className="h-[240px] w-[240px] rounded-full"
        />
      </div>
      <div className="w-full py-2">
        <h4 className="font-bold text-md text-[white]">{user.name}</h4>
        <p className="text-sm font-semibold text-[white]">@{user.handle}</p>
      </div>
    </div>
  );
};

const Challange6 = () => {
  return <Card user={USER_DATA} />;
};

export default Challange6;
