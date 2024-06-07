import Card from "~/components/Card";
import Me from "../assets/me.jpg";
import Snippents from "~/data/data";

const Home = () => {
  return (
    <div className="relative m-0">
      <h1 className="text-center mt-4 font-semibold text-[24px] mb-4 text-[#212529] ">
        ⚛️ 80 React.js Challenges🔥
      </h1>
      <hr className="mx-[20px] text-[#868e96]" />
      {/* <p className="text-center text-[green]">ME</p> */}
      {Snippents.map((item, index) => (
        <Card key={index} label={item.name} index={index} />
      ))}
      <div className="absolute top-0 right-10 flex items-center gap-2">
        <div className="w-11 h-11  rounded-full overflow-hidden">
          <img src={Me} alt="me" />
        </div>
        <div className="flex flex-col items-center gap-0">
          <p className="text-sm">Sahil Khanolkar</p>
          <div className="text-[12px]">⭐⭐⭐⭐⭐</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
