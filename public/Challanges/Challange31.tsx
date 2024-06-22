import { useEffect, useRef, useContext, createContext, useState } from "react";
import { Pasue, Play } from "../assets/svgIcons";

const videoPlaybackContext = createContext({
  videoPlayingId: null,
  setPlayingVideoId: () => {},
});

function VideoPlaybackProvider({ children }: any) {
  const [playingVideoId, setPlayingVideoId] = useState(null);

  return (
    <videoPlaybackContext.Provider
      value={{ playingVideoId, setPlayingVideoId }}
    >
      {children}
    </videoPlaybackContext.Provider>
  );
}

function VideoItem({ videoId, title, poster, src }: any) {
  const videoRef = useRef(null);
  const { playingVideoId, setPlayingVideoId } =
    useContext(videoPlaybackContext);

  const videoIsActive = playingVideoId === videoId;

  const handleTogglePlay = () => {
    if (!videoIsActive) {
      setPlayingVideoId(videoId);
    } else {
      setPlayingVideoId(null);
    }
  };

  useEffect(() => {
    if (videoIsActive) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [videoIsActive]);

  return (
    <li>
      <h3 className="text-[white] mt-8 ml-[10%] mb-4">{title}</h3>
      <article className="relative w-[80%] mx-auto">
        <video ref={videoRef} poster={poster} className="rounded-md">
          <source src={src} type="video/mp4" />
        </video>
        <button
          title={videoIsActive ? "Pause" : "Play"}
          onClick={handleTogglePlay}
          className="absolute right-5 bottom-5 h-10 w-10 bg-[#f59f00fb] rounded-full flex justify-center items-center"
        >
          {videoIsActive ? <Pasue /> : <Play />}
        </button>
      </article>
    </li>
  );
}

const NewsFeed = () => {
  const videos = [
    {
      id: 1,
      title: "The React Way",
      poster: "https://react.gg/img/visualized-og2.jpg",
      src: "https://stream.mux.com/TbVCJiOghmISJgg4AznPfFHYRfiVoek8OJHF56Y01oR4/high.mp4",
    },
    {
      id: 2,
      title: "The History of the Web",
      poster: "https://react.gg/img/visualized-og1.jpg",
      src: "https://stream.mux.com/EwJPlEBa0046jGSVdYOnRsX9WnqHjytgIBXwkOt7LvVg/high.mp4",
    },
    {
      id: 3,
      title: "Rendering, Visualized",
      poster: "https://react.gg/img/visualized-og5.jpg",
      src: "https://stream.mux.com/VvQKMwPEOq5BUnc9eRN4sL5sUEZrHqWxNlCbpXSkE3I/high.mp4",
    },
  ];

  return (
    <div className="mt-8 mb-16">
      <h1 className="text-[white] text-[24px] ml-[10%] font-semibold">
        NEWS FEED
      </h1>
      <ul>
        {videos.map((video) => (
          <VideoItem
            key={video.id}
            videoId={video.id}
            title={video.title}
            poster={video.poster}
            src={video.src}
          />
        ))}
      </ul>
    </div>
  );
};

const Challange31 = () => {
  return (
    <VideoPlaybackProvider>
      <NewsFeed />
    </VideoPlaybackProvider>
  );
};

export default Challange31;
