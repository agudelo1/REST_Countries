import axios from "axios";
import { useEffect, useState } from "react";
import ListCountries from "./ListCountries";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [countryName, setCountryName] = useState("");
  const [region, setRegion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const countryByName = countries.filter((country) =>
    country.name.common.toLowerCase().includes(countryName.toLowerCase())
  );

  const countryByRegion = countryByName.filter((country) =>
    country.region.toLowerCase().includes(region.toLowerCase())
  );

  const handleChangeCountryName = (e) => {
    const newCountryName = e.target.value;
    setCountryName(newCountryName);
  };
  const handleChangeRegion = (e) => {
    setRegion(e.target.value);
  };

  useEffect(() => {
    const URL = "https://restcountries.com/v3.1/all";
    axios
      .get(URL)
      .then(({ data }) => setCountries(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="p-4 py-6">
      <form
        onSubmit={handleSubmit}
        className="grid gap-8 sm:flex sm:justify-between max-w-[1200px] mx-auto "
      >
        <div className="ligthTheme p-4 rounded-md flex items-center gap-4 darkTheme sm:w-[360px]">
          <i className="bx bx-search-alt-2 text-dark-gray text-lg"></i>
          <input
            id="countryName"
            className="outline-none flex-1 bg-white/0"
            placeholder="Seach for a country ..."
            type="text"
            autoComplete="off"
            onChange={handleChangeCountryName}
            value={countryName}
          />
        </div>
        <select
          onChange={handleChangeRegion}
          className="outline-none font-nunito-sans ligthTheme p-4 
        rounded-md max-w-[120px] darkTheme"
        >
          <option value="">All</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </form>
      <ListCountries countries={countryByRegion} />
    </main>
  );
};
export default Home;
