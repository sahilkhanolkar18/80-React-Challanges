import { useState, useCallback } from "react";
import { Clipbord, CheckedClipbord } from "../assets/svgIcons";

const randomHash = crypto.randomUUID();

const oldSchoolCopy = (text: any) => {
  const tempTextArea = document.createElement("textarea");
  tempTextArea.value = text;
  document.body.appendChild(tempTextArea);
  tempTextArea.select();
  document.execCommand("copy");
  document.body.removeChild(tempTextArea);
};

const useCopyToClipboard = () => {
  const [state, setState] = useState(null);

  const copyToClipboard = useCallback((value: any) => {
    const handleCopy = async () => {
      try {
        if (navigator?.clipboard?.writeText) {
          await navigator.clipboard.writeText(value);
          setState(value);
        } else {
          throw new Error("writeText not supported.");
        }
      } catch (err) {
        oldSchoolCopy(value);
        setState(value);
      }
    };
    handleCopy();
  }, []);
  return [state, copyToClipboard];
};

const Challange48 = () => {
  const [copiedText, copyToClipboard] = useCopyToClipboard();
  const hasCopiedText = Boolean(copiedText);
  console.log(hasCopiedText);

  return (
    <section className="flex h-full flex-col items-center justify-center gap-3 text-[white]">
      <h1 className="text-xl font-semibold">useCopyToClipboard</h1>
      <label className="text-sm font">Fake API Key</label>
      <div className="bg-[#d69d33] rounded-md px-4 py-2 flex gap-2 items-center justify-center">
        <pre>
          <code>{randomHash}</code>
        </pre>
        <button
          disabled={hasCopiedText}
          className="bg-[#222831] rounded-full p-1" //@ts-ignore
          onClick={() => copyToClipboard(randomHash)}
        >
          {hasCopiedText ? <CheckedClipbord /> : <Clipbord />}
        </button>
      </div>
      {hasCopiedText && ( //@ts-ignore
        <div open={hasCopiedText} className="">
          <h4>
            Text Copied{" "}
            <span role="img" aria-label="Celebrate Emoji">
              🎉
            </span>
          </h4>
          <textarea
            placeholder="Paste your copied text"
            className="w-[390px] rounded-sm text-[black]"
          />{" "}
        </div>
      )}
    </section>
  );
};

export default Challange48;
