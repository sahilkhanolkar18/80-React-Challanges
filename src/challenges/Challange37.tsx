import { useMemo, useState, useEffect } from "react";
import fetchData from "./utils";

const Challange37 = () => {
  const [data, setData] = useState<any>([]);
  const [isRTL, setIsRTL] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortColumn, setSortColumn] = useState("id");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    const handleFetchData = async () => {
      const data = await fetchData();
      setData(data);
    };

    handleFetchData();
  }, []);

  const handleHeaderClick = (column: any) => {
    if (column === sortColumn) {
      setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortColumn(column);
      setSortOrder("asc");
    }
  };

  const handleToggleClick = () => {
    setIsRTL((prev) => !prev);
  };

  const filteredData = useMemo(() => {
    return data
      .map((row: any) => {
        if (
          row.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          String(row.id).includes(searchTerm) ||
          String(row.weight).includes(searchTerm)
        ) {
          return row;
        }

        return null;
      })
      .filter(Boolean);
  }, [data, searchTerm]);

  const sortedData = useMemo(() => {
    const sorted = [...filteredData];

    return sorted.sort((a, b) => {
      let aValue = a[sortColumn];
      let bValue = b[sortColumn];

      if (sortOrder === "asc") {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });
  }, [filteredData, sortColumn, sortOrder]);

  return (
    <div>
      <header className="flex gap-2 mt-10 w-[80%] m-auto">
        <button
          className="bg-[orange] px-3 py-1 rounded-md w-[170px]"
          onClick={handleToggleClick}
        >
          Toggle Columns
        </button>

        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search items"
          className="px-2 py-1 border border-[white] bg-[black] text-[white] rounded-sm w-full"
        />
      </header>

      <table
        className={`w-[80%] mx-auto border my-5 border-separate border-[grey]`}
      >
        <thead className="text-[orange] text-white">
          <tr>
            {isRTL ? (
              <>
                <th className="px-4 py-2 bg-[#584e51] border border-r border-[darkgrey]">
                  <button
                    className="font-medium"
                    onClick={() => handleHeaderClick("weight")}
                    aria-label="Weight"
                  >
                    Weight{" "}
                    {sortColumn === "weight" &&
                      (sortOrder === "asc" ? "↑" : "↓")}
                  </button>
                </th>
                <th className="px-4 py-2 bg-[#584e51] border border-r border-[darkgrey]">
                  <button
                    className="font-medium"
                    onClick={() => handleHeaderClick("name")}
                    aria-label="Name"
                  >
                    Name{" "}
                    {sortColumn === "name" && (sortOrder === "asc" ? "↑" : "↓")}
                  </button>
                </th>
                <th className="px-4 py-2 bg-[#584e51] border border-r border-[darkgrey]">
                  <button
                    className="font-medium"
                    onClick={() => handleHeaderClick("id")}
                    aria-label="ID"
                  >
                    ID{" "}
                    {sortColumn === "id" && (sortOrder === "asc" ? "↑" : "↓")}
                  </button>
                </th>
              </>
            ) : (
              <>
                <th className="px-4 py-2 bg-[#584e51] border border-r border-[darkgrey]">
                  <button
                    className="font-medium"
                    onClick={() => handleHeaderClick("id")}
                    aria-label="ID"
                  >
                    ID{" "}
                    {sortColumn === "id" && (sortOrder === "asc" ? "↑" : "↓")}
                  </button>
                </th>
                <th className="px-4 py-2 bg-[#584e51] border border-r border-[darkgrey]">
                  <button
                    className="font-medium"
                    onClick={() => handleHeaderClick("name")}
                    aria-label="Name"
                  >
                    Name{" "}
                    {sortColumn === "name" && (sortOrder === "asc" ? "↑" : "↓")}
                  </button>
                </th>
                <th className="px-4 py-2 bg-[#584e51] border border-r border-[darkgrey]">
                  <button
                    className="font-medium"
                    onClick={() => handleHeaderClick("weight")}
                    aria-label="Weight"
                  >
                    Weight{" "}
                    {sortColumn === "weight" &&
                      (sortOrder === "asc" ? "↑" : "↓")}
                  </button>
                </th>
              </>
            )}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row) => (
            <tr key={row.id} className="text-[white]">
              {isRTL ? (
                <>
                  <td className="border border-[grey] px-4 py-2 text-white">
                    {row.weight}
                  </td>
                  <td className="border border-[grey] px-4 py-2 text-white">
                    {row.name}
                  </td>
                  <td className="border border-[grey] px-4 py-2 text-white">
                    {row.id}
                  </td>
                </>
              ) : (
                <>
                  <td className="border border-[grey] px-4 py-2 text-white">
                    {row.id}
                  </td>
                  <td className="border border-[grey] px-4 py-2 text-white">
                    {row.name}
                  </td>
                  <td className="border border-[grey] px-4 py-2 text-white">
                    {row.weight}
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Challange37;
