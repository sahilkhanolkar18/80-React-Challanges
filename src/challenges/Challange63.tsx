import { useCallback, useSyncExternalStore } from "react";
import { Mobile, Desktop, Tablet } from "~/assets/svgIcons";
const useMediaQuery = (query: any) => {
  const subscribe = useCallback(
    (callback: any) => {
      const matchMedia = window.matchMedia(query);

      matchMedia.addEventListener("change", callback);
      return () => {
        matchMedia.removeEventListener("change", callback);
      };
    },
    [query]
  );

  const getSnapshot = () => {
    return window.matchMedia(query).matches;
  };

  const getServerSnapshot = () => {
    throw Error("useMediaQuery is a client-only hook");
  };

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
};

const Challange63 = () => {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  const isMediumDevice = useMediaQuery(
    "only screen and (min-width : 769px) and (max-width : 992px)"
  );
  const isLargeDevice = useMediaQuery(
    "only screen and (min-width : 993px) and (max-width : 1200px)"
  );
  const isExtraLargeDevice = useMediaQuery(
    "only screen and (min-width : 1201px)"
  );
  return (
    <div className="h-full flex flex-col justify-center items-center gap-3 ">
      <h1 className="text-2xl font-bold text-[white]">useMediaQuery</h1>
      <p className="text-sm text-[orange]">
        Resize your browser windows to see changes.
      </p>
      <div className="flex gap-5">
        <div
          className={`flex flex-col justify-center items-center h-[100px] w-[100px] rounded-md ${
            isSmallDevice ? " bg-[green] " : " bg-background"
          }`}
        >
          <Mobile />
          <p>small</p>
        </div>
        <div
          className={`flex flex-col justify-center items-center h-[100px] w-[100px] rounded-md ${
            isMediumDevice ? " bg-[green] " : " bg-background"
          }`}
        >
          <Tablet />
          <p>Medium</p>
        </div>
        <div
          className={`flex flex-col justify-center items-center h-[100px] w-[100px] rounded-md ${
            isLargeDevice ? " bg-[green] " : " bg-background"
          }`}
        >
          <Desktop />
          <p>Large</p>
        </div>
        <div
          className={`flex flex-col justify-center items-center h-[100px] w-[100px] rounded-md ${
            isExtraLargeDevice ? " bg-[green] " : " bg-background"
          }`}
        >
          <Desktop />
          <p>Extra Large</p>
        </div>
      </div>
    </div>
  );
};

export default Challange63;
