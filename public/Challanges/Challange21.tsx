import * as React from "react";
import { RotatingLines } from "react-loader-spinner";

const fetchData = async ({ query = "", page = 0, tag = "" }) => {
  return fetch(
    `https://hn.algolia.com/api/v1/search?query=${query}&tags=${encodeURIComponent(
      tag
    )}&page=${page}`
  )
    .then((response) => response.json())
    .then((json) => ({
      results: json.hits || [],
      pages: json.nbPages || 0,
      resultsPerPage: json.hitsPerPage || 20,
    }));
};

const Challange21 = () => {
  const [query, setQuery] = React.useState("");
  const [results, setResults] = React.useState([]);
  const [tag, setTag] = React.useState("story");
  const [page, setPage] = React.useState(0);
  const [resultsPerPage, setResultsPerPage] = React.useState(0);
  const [totalPages, setTotalPages] = React.useState(50);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    let ignore = false;

    const handleFetchData = async () => {
      setLoading(true);
      setResults([]);

      const { results, pages, resultsPerPage } = await fetchData({
        query,
        page,
        tag,
      });

      if (ignore === true) return;

      setTotalPages(pages);
      setResults(results);
      setLoading(false);
      setResultsPerPage(resultsPerPage);
    };

    handleFetchData();

    return () => {
      ignore = true;
    };
  }, [query, tag, page]);

  const handleSearch = (e) => {
    setQuery(e.target.value);
    setPage(0);
  };

  const handleTag = (e) => {
    setTag(e.target.value);
    setPage(0);
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    setPage(page - 1);
  };

  return (
    <main className="flex flex-col h-full  my-4 w-[70%] m-auto">
      <h1 className="text-[white] text-[22px] font-semibold mb-2">
        Hacker News Search
      </h1>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex w-full justify-center gap-2 "
      >
        <div className="flex flex-col gap-1 text-[white] w-[80%] ">
          <label htmlFor="query">Search</label>
          <input
            type="text"
            id="query"
            name="query"
            value={query}
            onChange={handleSearch}
            placeholder="Search Hacker News..."
            className="px-2 py-1 border border-[white] bg-[black] text-[white] rounded-sm w-full mt-1 mb-2"
          />
        </div>
        <div className="flex flex-col gap-1 text-[white] w-[20%]">
          <label htmlFor="tag">Tag</label>
          <select
            id="tag"
            name="tag"
            onChange={handleTag}
            value={tag}
            className="px-2 py-1 border border-[white] bg-[black] text-[white] rounded-sm w-full mt-1 mb-2"
          >
            <option value="story">Story</option>
            <option value="ask_hn">Ask HN</option>
            <option value="show_hn">Show HN</option>
            <option value="poll">Poll</option>
          </select>
        </div>
      </form>
      <section>
        <header className="flex align-middle justify-between">
          <h2 className="text-[white] text-[18px]">
            <span>
              {totalPages === 0
                ? "No Results"
                : `Page ${page + 1} of ${totalPages}`}
            </span>
            <RotatingLines
              strokeColor="grey"
              strokeWidth="5"
              animationDuration="0.75"
              width="20"
              visible={loading}
            />
          </h2>
          <div className="flex gap-2">
            <button
              className="text-[orange]"
              onClick={handlePrevPage}
              disabled={page <= 0}
            >
              Previous
            </button>
            <button
              className="text-[orange]"
              onClick={handleNextPage}
              disabled={page + 1 >= totalPages}
            >
              Next
            </button>
          </div>
        </header>
        <ul className="mt-4">
          {results.map(({ url, objectID, title }, index) => {
            const href =
              url || `https://news.ycombinator.com/item?id=${objectID}`;

            const position = resultsPerPage * page + index + 1;

            return (
              <li key={objectID}>
                <span className="text-[white]">{position}.</span>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[orange] ml-4 underline"
                >
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
};

export default Challange21;
