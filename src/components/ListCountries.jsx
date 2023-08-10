import CountryCard from "./CountryCard";

const ListCountries = ({ countries }) => {
  return (
    <section
      className="pt-10 grid gap-6 justify-center
     grid-cols-[repeat(auto-fill,_260px)] max-w-[1200px] mx-auto"
    >
      {countries.map((country) => (
        <CountryCard key={country.cca2} country={country} />
      ))}
    </section>
  );
};
export default ListCountries;
