import axios from "axios";
import { useEffect, useState } from "react";
import ListCountries from "./ListCountries";

const Home = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const URL = "https://restcountries.com/v3.1/all";
    axios
      .get(URL)
      .then(({ data }) => setCountries(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="p-4 py-6">
      <form className="grid gap-8 sm:flex sm:justify-between max-w-[1200px] mx-auto ">
        <div className="ligthTheme p-4 rounded-md flex items-center gap-4 darkTheme sm:w-[360px]">
          <i className="bx bx-search-alt-2 text-dark-gray text-lg"></i>
          <input
            className="outline-none flex-1 bg-white dark:bg-dark-blue transition-colors"
            placeholder="Seach for a country ..."
            type="text"
          />
        </div>
        <select
          className="outline-none font-nunito-sans ligthTheme p-4 
        rounded-md max-w-[120px] darkTheme"
        >
          <option value="">All</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europa">Europa</option>
          <option value="Oceania">Oceania</option>
        </select>
      </form>
      <ListCountries countries={countries} />
    </main>
  );
};
export default Home;
