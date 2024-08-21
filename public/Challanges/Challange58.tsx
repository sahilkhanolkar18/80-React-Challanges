import { useState, useEffect } from "react";

const useDebounce = (value: any, delay: any) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const id = window.setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      window.clearTimeout(id);
    };
  }, [value, delay]);

  return debouncedValue;
};

const searchHackerNews = async (query = "") => {
  return fetch(`https://hn.algolia.com/api/v1/search?query=${query}`)
    .then((response) => response.json())
    .then((json) => ({
      results: json.hits || [],
      pages: json.nbPages || 0,
      resultsPerPage: json.hitsPerPage || 20,
    }));
};

const Challange58 = () => {
  const [searchTerm, setSearchTerm] = useState("js");
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const handleChange = (e: any) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  useEffect(() => {
    const searchHN = async () => {
      setIsSearching(true);
      const data = await searchHackerNews(debouncedSearchTerm);
      setResults(data.results);
      setIsSearching(false);
    };

    if (debouncedSearchTerm) {
      searchHN();
    }
  }, [debouncedSearchTerm]);

  return (
    <div className="h-full my-8">
      <div className=" flex flex-col justify-center items-center gap-4 text-[white]">
        <h1 className="text-bold text-xl">UseDebounce Example</h1>

        <form onSubmit={handleSubmit} className="w-[420px] flex gap-2 ">
          <input
            type="text"
            placeholder="Search HN"
            className="w-full border border-[orange] px-2 py-2 rounded-md text-[black]"
            value={searchTerm}
            onChange={handleChange}
          />
          <button className="bg-[#f7a714c7] rounded-sm px-6" type="submit">
            Search
          </button>
        </form>

        <table className="table-auto border-separate border border-[lightgray] w-[85%] text-center">
          <thead>
            <tr className="bg-[#8f6517] text-white">
              <th className="px-4 py-2">#</th>
              <th className="px-4 py-2">Article</th>
              <th className="px-4 py-2">Author</th>
              <th className="px-4 py-2">Points</th>
              <th className="px-4 py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {isSearching ? (
              <tr>
                <td colSpan={4} className="py-4">
                  Searching...
                </td>
              </tr>
            ) : (
              results.map((result: any) => (
                <tr key={result.objectID}>
                  <td className="border px-4 py-2">{result.objectID}</td>

                  <td className="border px-4 py-2">
                    <a
                      href={result.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[orange] underline"
                    >
                      {result.title || "No title"}
                    </a>
                  </td>
                  <td className="border px-4 py-2">{result.author}</td>
                  <td className="border px-4 py-2">{result.points}</td>
                  <td className="border px-4 py-2">
                    {new Date(result.created_at).toLocaleDateString()}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <div className="h-[40px]"></div>
    </div>
  );
};

export default Challange58;
