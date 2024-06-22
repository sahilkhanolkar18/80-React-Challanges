import Card from "~/components/Card";
import Me from "../assets/me.jpg";
import Snippents from "~/data/data";
import { ReactLogo } from "../assets/svgIcons";

const Home = () => {
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
      {/* <p className="text-center text-[green]">ME</p> */}
      {Snippents.slice()
        .reverse()
        .map((item, index) => (
          <Card
            key={index}
            label={item.name}
            index={item.id - 1}
            image={item.image}
          />
        ))}
      <div className="absolute top-0 right-10 flex gap-2 ">
        <div className="w-11 h-11  rounded-full overflow-hidden border border-[#da6c36] border-[2px]">
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

          {/* <div className="text-[12px]">⭐⭐⭐⭐⭐</div> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
