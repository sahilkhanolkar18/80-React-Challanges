import { useState, useEffect } from "react";

const Challange20 = () => {
  const [countryCode, setCountryCode] = useState("AU");
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    let ignore = false;

    const fetchCountry = async () => {
      const url = `https://restcountries.com/v2/alpha/${countryCode}`;
      setIsLoading(true);

      try {
        const response = await fetch(url);
        const data = await response.json();

        if (ignore === false) {
          setData(data);
          setError(null);
          setIsLoading(false);
        }
      } catch (error: any) {
        if (ignore === false) {
          setData(null);
          setError(error);
          setIsLoading(false);
        }
      }
    };

    fetchCountry();

    return () => {
      ignore = true;
    };
  }, [countryCode]);

  const handleChange = (e: any) => {
    setCountryCode(e.target.value);
  };

  return (
    <section className="h-full flex flex-col justify-center  gap-2 w-[300px] m-auto">
      <header>
        <h1 className="text-[white] text-[22px] font-semibold mb-2">
          Country Info:
        </h1>

        <label htmlFor="country" className="text-[white] text-sm">
          Select a country:
        </label>
        <div>
          <select
            id="country"
            value={countryCode}
            onChange={handleChange}
            className="px-2 py-1 bg-[black] rounded-sm w-full mt-1 mb-2 text-[orange] border border-[orange]"
          >
            <option value="AU">Australia</option>
            <option value="CA">Canada</option>
            <option value="CN">China</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
            <option value="IN">India</option>
            <option value="JP">Japan</option>
            <option value="MX">Mexico</option>
            <option value="GB">United Kingdom</option>
            <option value="US">United States of America</option>
          </select>
          {isLoading && <span className="text-[white]">Loading...</span>}
          {error && <span>{error.message}</span>}
        </div>
      </header>

      {data && !isLoading && !error && (
        <article className=" px-6 pt-2 rounded-lg shadow-lg">
          <h2 className="text-[orange] text-2xl font-semibold mb-4 ">
            {data.name}
          </h2>
          <table className="w-full text-[white] table-auto">
            <tbody>
              <tr className="bg-gray-700">
                <td className="py-2 px-4 border-b ">Capital:</td>
                <td className="py-2 px-4 border-b ">{data.capital}</td>
              </tr>
              <tr className="bg-gray-800">
                <td className="py-2 px-4 border-b ">Region:</td>
                <td className="py-2 px-4 border-b">{data.region}</td>
              </tr>
              <tr className="bg-gray-700">
                <td className="py-2 px-4 border-b ">Population:</td>
                <td className="py-2 px-4 border-b ">{data.population}</td>
              </tr>
              <tr className="bg-gray-800">
                <td className="py-2 px-4 border-b ">Area:</td>
                <td className="py-2 px-4 border-b ">{data.area}</td>
              </tr>
            </tbody>
          </table>
        </article>
      )}
    </section>
  );
};

export default Challange20;
