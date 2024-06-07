import { useNavigate, useParams } from "react-router";
import { CopyBlock, dracula } from "react-code-blocks";
import Me from "../assets/me.jpg";
import { useState, useEffect, Suspense } from "react";
import { GitLogo, BackIcon } from "~/assets/svgIcons";
import Snippents from "../data/data";
import NotFound from "~/components/ErrorPage";

const ChallangeTemplate = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("problem");
  const [code, setCode] = useState("");
  const [Component, setComponent] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchComponentCode();
    console.log("base");
  }, []);

  useEffect(() => {
    const loadComponent = async () => {
      console.log("loadComponent");
      if (id) {
        try {
          const ImportedComponent = await import(
            `../components/Challange${id}.tsx`
          );
          setComponent(() => ImportedComponent.default);
        } catch (err) {
          navigate("/error");
          console.log(err);
          setError(true);
        }
      } else {
        console.log("id is not present");
      }
    };

    loadComponent();
  }, []);

  if (error) {
    return <NotFound />;
  }

  const fetchComponentCode = async () => {
    if (id) {
      try {
        const response = await fetch(`Challanges/Challange${id}.tsx`);
        const text = await response.text();
        setCode(text);
      } catch (error) {
        setError(true);
      }
    } else {
      console.log("id is not present");
    }
  };

  const language = "tsx";
  const lineNumbers = true;

  return (
    <div className="relative  font-sans">
      <div className="flex gap-2 mb-3 mt-4 items-center">
        <button
          className="w-10 h-10 bg-[#f59f0094] hover:bg-[#f59f0079] rounded-full flex items-center justify-center ml-6"
          onClick={() => navigate("/")}
        >
          <BackIcon />
        </button>
        <h1 className="text-md font-semibold">Challange #{id}</h1>
      </div>
      <hr className="mb-2  m-auto mx-[25px] text-[#868e96]" />
      <div className="relative flex gap-2 ml-6  bg-[#e9ecef] py-1.5 pl-2 w-[455px] rounded-md">
        <button
          className={`px-6 py-2 ${
            activeTab === "problem" ? "bg-[#f59f00bb]  rounded-md" : ""
          }`}
          onClick={() => setActiveTab("problem")}
        >
          Problem
        </button>
        <button
          className={`px-6 py-2 ${
            activeTab === "code" ? "bg-[#f59f00bb]  rounded-md" : ""
          }`}
          onClick={() => setActiveTab("code")}
        >
          Solution & Code
        </button>
        <button
          className={`px-6 py-2 ${
            activeTab === "learned" ? "bg-[#f59f0094]  rounded-md" : ""
          }`}
          onClick={() => setActiveTab("learned")}
        >
          What I learned
        </button>
      </div>
      {activeTab === "problem" && (
        <div className="mx-[20px]  mt-6">
          <h1 className="font-semibold text-[28px] text-[#212529]">
            {/*@ts-ignore*/}
            {Snippents[id - 1]?.heading}
          </h1>
          <p className="text-[#495057] text-md my-2">
            {/*@ts-ignore*/}
            {Snippents[id - 1]?.description}
          </p>

          <ul className="list-disc pl-5">
            {/*@ts-ignore*/}
            {Snippents[id - 1]?.problem.map(
              (problem: string, index: number) => {
                return (
                  <li key={index} className="text-[#495057] text-md">
                    {problem}
                  </li>
                );
              }
            )}
          </ul>
        </div>
      )}

      {activeTab === "code" && (
        <div>
          <div className="bg-[#f59f00b0]  w-[48%] ml-[40px] h-[80vh] absolute my-[30px] rounded-md">
            <Suspense fallback={<div>Loading...</div>}>
              {/*@ts-ignore*/}
              <Component />
            </Suspense>
          </div>

          <div className="w-[45%] ml-[53%] h-[85vh] overflow-y-auto ">
            <div className="absolute top-[75px] z-50  ">
              <button className="bg-[#f8f9fa] px-4 py-2 border border-[#ced4da] rounded-sm text-sm cursor-default">
                Challenge{id}.tsx
              </button>
            </div>

            <CopyBlock
              language={language}
              text={code}
              showLineNumbers={lineNumbers}
              theme={dracula}
              //@ts-ignore
              wrapLines={true}
              codeBlock
            />
          </div>

          <button className="absolute bottom-8 right-20 px-3 py-2 bg-[#f59f00c2] hover:bg-[#f59f008a] flex rounded">
            <GitLogo />
            View in GitHub
          </button>
        </div>
      )}
      {activeTab === "learned" && (
        <div className="mx-[20px] mt-6">
          <h1 className="font-semibold text-[28px] text-[#212529]">
            {/*@ts-ignore*/}

            {Snippents[id - 1]?.learningHeading}
          </h1>
          {/*@ts-ignore*/}

          {Snippents[id - 1]?.note.map((i) => {
            return <p className="text-[#495057] text-md">{i}</p>;
          })}
        </div>
      )}

      <div className="absolute top-0 right-16 flex items-center gap-2">
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

export default ChallangeTemplate;
