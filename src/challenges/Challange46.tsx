import { useSyncExternalStore } from "react";

const Challange46 = () => {
  const language = usePreferredLanguage();

  return (
    <section className="h-full flex flex-col items-center justify-center text-[white] gap-4">
      <h1 className="font-semibold text-lg">usePreferredLanguage</h1>
      <p className="text-sm text-[green]">
        You can change your preferred language here -
        chrome://settings/languages
      </p>
      <h2 className="flex gap-1">
        The correct date format for{" "}
        <pre className="text-[orange]">{language}</pre> is{" "}
        <time className="text-[orange]">
          {new Date(Date.now()).toLocaleDateString(language)}
        </time>
      </h2>
    </section>
  );
};
const usePreferredLanguage = () => {
  const subscribe = (cb: any) => {
    window.addEventListener("languagechange", cb);
    return () => window.removeEventListener("languagechange", cb);
  };

  const getSnapshot = () => {
    return navigator.language;
  };

  const getServerSnapshot = () => {
    throw Error("usePreferredLanguage is a client-only hook");
  };

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
};

export default Challange46;
