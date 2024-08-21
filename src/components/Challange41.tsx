import { useSyncExternalStore } from "react";
import { Mobile, Desktop } from "~/assets/svgIcons";

const query = "only screen and (max-width : 768px)";

const subscribe = (callback: any) => {
  const matchMedia = window.matchMedia(query);
  matchMedia.addEventListener("change", callback);

  return () => {
    matchMedia.removeEventListener("change", callback);
  };
};

const getSnapshot = () => {
  return window.matchMedia(query).matches;
};

const Challange41 = () => {
  const isMobile = useSyncExternalStore(subscribe, getSnapshot);

  return (
    <section className="h-full flex flex-col justify-center items-center gap-3 text-[white]">
      <p className="text-sm text-[green]">
        Resize your browser's window to see changes.
      </p>
      <article className="flex gap-4">
        <figure
          className={` ${
            isMobile ? "bg-[#00712D] " : "bg-background"
          } h-[150px] w-[200px] flex flex-col justify-center items-center rounded-lg`}
        >
          <Mobile />
          <figcaption>Is mobile: {`${isMobile}`}</figcaption>
        </figure>

        <figure
          className={` ${
            !isMobile ? "bg-[#00712D] " : "bg-background"
          }  h-[150px] w-[200px] flex flex-col justify-center items-center rounded-lg`}
        >
          <Desktop />
          <figcaption>Is larger device: {`${!isMobile}`}</figcaption>
        </figure>
      </article>
    </section>
  );
};

export default Challange41;
