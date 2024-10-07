import Image from "../assets/me.jpg";

const USER_DATA = {
  name: "SAHIL KHANOLKAR",
  profileImage: Image,
  handle: "SahilKhanolkar",
};

const Avatar = ({ img, name }: any) => {
  return (
    <img
      src={img}
      alt={`Avatar for ${name}`}
      className="h-[240px] w-[240px] rounded-full"
    />
  );
};

const Name = ({ name }: any) => {
  return <h4 className="font-bold text-md text-[white]">{name}</h4>;
};

const Handle = ({ handle }: any) => {
  return <p className="text-sm font-semibold text-[white]">@{handle}</p>;
};

const Card = ({ user, addFriend }: any) => {
  return (
    <div className="bg-[#343a40] text-center h-[400px] w-[350px] m-auto mt-[13%] rounded-md flex flex-col items-center justify-center border border-[#868e96]">
      <div className="h-[270px] flex flex-col items-center justify-center">
        <Avatar img={user.profileImage} name={user.name} />
      </div>
      <div className="w-full py-2">
        <Name name={user.name} />
        <Handle handle={user.handle} />
        <button
          onClick={addFriend}
          className="py-2 px-5 mt-2 bg-[#f3a007] hover:bg-[#f59f008a]  rounded-md"
        >
          Add Friend
        </button>
      </div>
    </div>
  );
};

const Challange7 = () => {
  return (
    <Card
      user={USER_DATA}
      addFriend={() => {
        alert("Added!");
      }}
    />
  );
};

export default Challange7;
