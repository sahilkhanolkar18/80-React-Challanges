import { useEffect, useRef, useReducer, useState } from "react";

const initialState = {
  error: undefined,
  data: undefined,
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "loading":
      return { ...initialState };
    case "fetched":
      return { ...initialState, data: action.payload };
    case "error":
      return { ...initialState, error: action.payload };
    default:
      return state;
  }
};

const useFetch = (url: any, options: any) => {
  const cacheRef = useRef({});

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (typeof url !== "string") return;

    let ignore = false;

    const fetchData = async () => {
      const cachedResponse = cacheRef.current[url];

      if (cachedResponse) {
        dispatch({ type: "fetched", payload: cachedResponse });
        return;
      }

      dispatch({ type: "loading" });

      try {
        const res = await fetch(url, options);

        if (!res.ok) {
          throw new Error(res.statusText);
        }

        const json = await res.json();
        cacheRef.current[url] = json;

        if (!ignore) {
          dispatch({ type: "fetched", payload: json });
        }
      } catch (e) {
        if (!ignore) {
          dispatch({ type: "error", payload: e });
        }
      }
    };

    fetchData();

    return () => {
      ignore = true;
    };
  }, [url, options]);

  return state;
};

const Card = ({ data, loading, error }: any) => {
  if (loading) {
    return (
      <p className="bg-[#4E31AA] h-[250px] w-[200px] p-6 flex flex-col justify-center items-center">
        Loading...
      </p>
    );
  }

  if (error) {
    return <p>Error: {error.message || "An error occurred"}</p>;
  }

  if (!data || !data.sprites) {
    return <p>No data available</p>;
  }

  return (
    <div className="bg-[#4E31AA] h-[250px] w-[200px]  rounded flex flex-col justify-center items-center gap-4">
      <img
        src={data.sprites.other.dream_world.front_default}
        alt={data.name}
        className="h-[150px] w-[100px]"
      />
      <p> {data.name}</p>
    </div>
  );
};

const Challange76 = () => {
  const [count, setCount] = useState(1);

  const { error, data } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${count}`
  );

  return (
    <section className="h-full flex flex-col justify-center items-center gap-3 text-[white]">
      <h1 className="text-2xl font-bold">useFetch</h1>
      <div className=" flex justify-center items-center text-[orange] underline gap-4">
        <button
          disabled={count < 2}
          className="link"
          onClick={() => setCount((c) => c - 1)}
        >
          Prev
        </button>
        <button className="link" onClick={() => setCount((c) => c + 1)}>
          Next
        </button>
      </div>

      <Card loading={!data} error={error} data={data} />
    </section>
  );
};

export default Challange76;
