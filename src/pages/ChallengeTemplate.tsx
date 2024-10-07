import { useNavigate, useParams } from "react-router";
import { CopyBlock, dracula } from "react-code-blocks";
import { useState, useEffect, Suspense } from "react";
import { GitLogo, BackIcon } from "~/assets/svgIcons";
import Snippents from "../data/data";
import NotFound from "~/components/ErrorPage";
import Header from "~/components/Header";

const ChallengeTemplate = () => {
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
            `../challenges/Challange${id}.tsx`
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

  const language = "jsx";
  const lineNumbers = true;

  return (
    <div className="relative  font-sans">
      <Header />
      <div className="flex gap-2 mb-3 mt-4 items-center">
        <button
          className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center ml-6"
          onClick={() => navigate("/")}
        >
          <BackIcon />
        </button>
        <div className="relative flex gap-2 ml-0 rounded-md bg-gray-100 py-1 pl-2 w-[384px] rounded- text-sm">
          <button
            className={`px-4 py-2 text-gray-700 ${
              activeTab === "problem" ? "bg-primary-300  rounded-md" : ""
            }`}
            onClick={() => setActiveTab("problem")}
          >
            Problem
          </button>
          <button
            className={`px-4 py-2 text-gray-700 ${
              activeTab === "code" ? "bg-primary-300  rounded-md" : ""
            }`}
            onClick={() => setActiveTab("code")}
          >
            Solution & Code
          </button>
          <button
            className={`px-4 py-2 text-gray-700 ${
              activeTab === "learned" ? "bg-primary-300  rounded-md" : ""
            }`}
            onClick={() => setActiveTab("learned")}
          >
            What I learned
          </button>
        </div>
      </div>

      <hr className="m-auto mx-[25px] text-gray-700 mt-3" />

      {activeTab === "problem" && (
        <div className="mx-[20px]  mt-2 w-[1000px] ml-14">
          <h1 className="text-md font-medium text-gray-600 underline">
            Challange #{id}
          </h1>
          <h1 className="font-semibold text-2xl text-gray-700 mt-2">
            {/*@ts-ignore*/}
            {Snippents[id - 1]?.heading}
          </h1>
          <p className="text-gray-600 text-md my-2 t mt-3">
            {/*@ts-ignore*/}
            {Snippents[id - 1]?.description}
          </p>
          <h4 className="font-semibold text-gray-600 text-md my-4">Tasks</h4>
          <ul className="list-disc pl-5 flex flex-col gap-2">
            {/*@ts-ignore*/}
            {Snippents[id - 1]?.problem.map(
              (problem: string, index: number) => {
                return (
                  <li key={index} className="text-gray-600 text-md">
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
          <p className="absolute top-42 left-11 text-gray-700">Result:</p>
          <div className="bg-[#222831]  w-[48%] ml-[40px] h-[72vh] absolute my-[30px] rounded-md overflow-y-auto">
            <Suspense fallback={<div>Loading...</div>}>
              {/*@ts-ignore*/}
              <Component />
            </Suspense>
          </div>

          <div className="w-[45%] ml-[53%] h-[75vh] overflow-y-auto ">
            <div className=" top-[75px] z-50  ">
              {/* <button className="bg-[#f8f9fa] px-4 py-2 border border-[#ced4da] rounded-sm text-sm cursor-default ">
                Challenge{id}.tsx
              </button> */}
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

          <a
            href={`https://github.com/sahilkhanolkar18/80-React-Challanges/blob/master/src/components/Challange${id}.tsx`}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-8 right-20 px-3 py-2 bg-primary-500 hover:bg-primary-600 flex rounded text-gray-800"
          >
            <GitLogo />
            View in GitHub
          </a>
        </div>
      )}
      {activeTab === "learned" && (
        <div>
          <p className="absolute top-42 left-11 text-gray-700">Result:</p>
          <div className="bg-[#222831]  w-[48%] ml-[40px] h-[72vh] absolute my-[30px] rounded-md overflow-y-auto">
            <Suspense fallback={<div>Loading...</div>}>
              {/*@ts-ignore*/}
              <Component />
            </Suspense>
          </div>
          <div className="w-[45%] ml-[53%] h-[75vh] overflow-y-auto ">
            <div className="">
              <div className="mx-[20px] mt-6 max-w-[700px]">
                <h1 className="font-semibold text-[28px] text-gray-700">
                  {/*@ts-ignore*/}
                  What I learned ?
                </h1>
                <h1 className="font-semibold text-[16px] text-gray-700 mt-3">
                  {/*@ts-ignore*/}
                  {Snippents[id - 1]?.learningHeading}
                </h1>
                {/*@ts-ignore*/}

                <ul className="list-disc pl-5 flex flex-col gap-1 mt-3">
                  {/*@ts-ignore*/}
                  {Snippents[id - 1]?.note.map((i) => {
                    return <li className="text-[#495057] text-md">{i}</li>;
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChallengeTemplate;
