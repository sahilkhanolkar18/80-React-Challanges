import { useState, useRef } from "react";
import { Pasue, Play } from "../assets/svgIcons";

const Challange23 = () => {
  const videoRef = useRef<any>();
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTogglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="flex flex-col justify-center h-full">
      <article className="relative w-[70%] mx-auto ">
        <h1 className="text-[white] mb-2 text-[20px] ">Video Player</h1>

        <video
          ref={videoRef}
          poster="https://image.mux.com/TbVCJiOghmISJgg4AznPfFHYRfiVoek8OJHF56Y01oR4/thumbnail.webp"
        >
          <source
            src="https://stream.mux.com/TbVCJiOghmISJgg4AznPfFHYRfiVoek8OJHF56Y01oR4/high.mp4"
            type="video/mp4"
          />
        </video>
        <div>
          <button
            title={isPlaying ? "Pause" : "Play"}
            onClick={handleTogglePlay}
            className="absolute right-5 bottom-5 h-10 w-10 bg-[#f59f00fb] rounded-full flex justify-center items-center"
          >
            {isPlaying ? <Pasue /> : <Play />}
          </button>
        </div>
      </article>
    </section>
  );
};

export default Challange23;
