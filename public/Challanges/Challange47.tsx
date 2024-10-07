import { useState, useEffect } from "react";

const faviconMap = {
  uidotdev: "https://ui.dev/favicon/favicon-32x32.png",
  bytes: "https://bytes.dev/favicon/favicon-32x32.png",
  react_newsletter: "https://reactnewsletter.com/favicon/favicon-32x32.png",
};

const useFavicon = (url: any) => {
  useEffect(() => {
    let link = document.querySelector(`link[rel~="icon"]`);
    if (!link) {
      link = document.createElement("link"); //@ts-ignore

      link.type = "image/x-icon"; //@ts-ignore

      link.href = url;
      document.head.appendChild(link);
    } else {
      //@ts-ignore

      link.href = url;
    }
  }, [url]);
};

const Challange47 = () => {
  const [id, setId] = useState("uidotdev"); //@ts-ignore

  useFavicon(faviconMap[id]);
  return (
    <section className="h-full text-[white] flex flex-col items-center justify-center gap-3">
      <h1 className="text-lg font-semibold">useFavicon</h1>
      <div className="flex gap-4 underline text-[orange]">
        <button
          title="Set the favicon to uidotdev's logo"
          className={`link ${id === "uidotdev" && "active"}`}
          onClick={() => setId("uidotdev")}
        >
          ui.dev
        </button>
        <button
          title="Set the favicon to Bytes' logo"
          className={`link ${id === "bytes" && "active"}`}
          onClick={() => setId("bytes")}
        >
          bytes
        </button>
        <button
          title="Set the favicon to React Newsletter's logo"
          className={`link ${id === "react_newsletter" && "active"}`}
          onClick={() => setId("react_newsletter")}
        >
          react newsletter
        </button>
      </div>
      <p className="text-sm text-[green]">
        You can see the favicon change on the tab icon
      </p>
    </section>
  );
};

export default Challange47;
