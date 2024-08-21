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

  const language = "jsx";
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
        <h1 className="text-md font-semibold ">Challange #{id}</h1>
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
        <div className="mx-[20px]  mt-6 w-[1000px] ml-8">
          <h1 className="font-semibold text-[32px] text-[#343a40]">
            {/*@ts-ignore*/}
            {Snippents[id - 1]?.heading}
          </h1>
          <p className="text-[#495057] text-md my-2 text-lg mt-3">
            {/*@ts-ignore*/}
            {Snippents[id - 1]?.description}
          </p>
          <h4 className="font-bold text-[#495057] text-md my-4">Tasks</h4>
          <ul className="list-disc pl-5 flex flex-col gap-1">
            {/*@ts-ignore*/}
            {Snippents[id - 1]?.problem.map(
              (problem: string, index: number) => {
                return (
                  <li key={index} className="text-[#495057] text-lg">
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
          <p className="absolute top-[119px] left-[42px]">Result:</p>
          <div className="bg-[#222831]  w-[48%] ml-[40px] h-[70vh] absolute my-[30px] rounded-md overflow-y-auto">
            <Suspense fallback={<div>Loading...</div>}>
              {/*@ts-ignore*/}
              <Component />
            </Suspense>
          </div>

          <div className="w-[45%] ml-[53%] h-[75vh] overflow-y-auto ">
            <div className="absolute top-[75px] z-50  ">
              <button className="bg-[#f8f9fa] px-4 py-2 border border-[#ced4da] rounded-sm text-sm cursor-default ">
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

          <a
            href={`https://github.com/sahilkhanolkar18/80-React-Challanges/blob/master/src/components/Challange${id}.tsx`}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-8 right-20 px-3 py-2 bg-[#f59f00fb] hover:bg-[#f59f00a9] flex rounded"
          >
            <GitLogo />
            View in GitHub
          </a>
        </div>
      )}
      {activeTab === "learned" && (
        // <div className="mx-[20px] mt-6">

        //   <h1 className="font-semibold text-[28px] text-[#212529]">
        //     {/*@ts-ignore*/}

        //     {Snippents[id - 1]?.learningHeading}
        //   </h1>
        //   {/*@ts-ignore*/}

        //   {Snippents[id - 1]?.note.map((i) => {
        //     return <p className="text-[#495057] text-md">{i}</p>;
        //   })}
        // </div>
        <div>
          <p className="absolute top-[119px] left-[42px]">Result:</p>
          <div className="bg-[#222831]  w-[48%] ml-[40px] h-[70vh] absolute my-[30px] rounded-md overflow-y-auto">
            <Suspense fallback={<div>Loading...</div>}>
              {/*@ts-ignore*/}
              <Component />
            </Suspense>
          </div>
          <div className="w-[45%] ml-[53%] h-[85vh] overflow-y-auto ">
            <div className="absolute top-[110px] z-50  ">
              <div className="mx-[20px] mt-6 max-w-[700px]">
                <h1 className="font-semibold text-[28px] text-[#212529]">
                  {/*@ts-ignore*/}
                  What I learned ?
                </h1>
                <h1 className="font-semibold text-[16px] text-[#212529] mt-3">
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

      <div className="absolute top-0 right-16 flex  gap-2">
        <div className="w-11 h-11  rounded-full overflow-hidden border border-[#da6c36] border-[2px]">
          <img src={Me} alt="me" />
        </div>
        <div className="flex flex-col items-center relative">
          <p className="text-sm mt-1">Sahil Khanolkar</p>
          {/* <div className="text-[12px]">⭐⭐⭐⭐⭐</div> */}

          <a
            href={`https://github.com/sahilkhanolkar18`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[12px] underline absolute bottom-1 right-8"
          >
            Git Hub
          </a>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 w-full p-2">
        <hr className="mb-2" />
        <div className="text-center">
          <p>@80-React-Challanges by Sahil Khanolkar</p>
        </div>
      </div>
    </div>
  );
};

export default ChallangeTemplate;
