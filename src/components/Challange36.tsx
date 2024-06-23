import { useState, useMemo } from "react";

const calculatePrime = (n: any) => {
  let count = 0;
  let num = 2;
  while (count < n) {
    if (isPrime(num)) {
      count++;
    }
    num++;
  }
  return num - 1;
};

const isPrime = (num: any) => {
  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const translations: { [key: string]: any } = {
  "en-US": {
    nextPrime: "Next Prime",
    nthPrime: (count: string, prime: number) =>
      `The ${count} prime number is ${prime}.`,
  },
  "es-ES": {
    nextPrime: "Próximo Primo",
    nthPrime: (count: string, prime: number) =>
      `El número primo ${count} es ${prime}.`,
  },
};

const formatNumberToString = (num: number, locale: string): string => {
  return new Intl.NumberFormat(locale).format(num);
};

const Challange36 = () => {
  const [count, setCount] = useState(1);
  const [locale, setLocale] = useState("en-US");

  const handleClick = () => setCount(count + 1);
  const handleLocaleChange = (e: any) => setLocale(e.target.value);

  const nthprime = useMemo(() => {
    return calculatePrime(count);
  }, [count]);

  return (
    <div className="p-4 flex flex-col justify-center items-center h-full">
      <header className="flex items-center gap-4 mb-4 justify-center ">
        <select
          value={locale}
          onChange={handleLocaleChange}
          className="px-2 py-1 bg-[black] rounded-sm w-[120px] text-[orange] border border-[orange] text-sm"
        >
          <option value="en-US">English (US)</option>
          <option value="es-ES">Español (ES)</option>
        </select>
        <button
          className="bg-[#f3a007] hover:bg-[#f59f008a] text-[black] px-4 py-1 rounded"
          onClick={handleClick}
        >
          {translations[locale].nextPrime}
        </button>
      </header>
      <p className="text-[white]">
        {translations[locale].nthPrime(
          formatNumberToString(count, locale),
          nthprime
        )}
      </p>
    </div>
  );
};

export default Challange36;
