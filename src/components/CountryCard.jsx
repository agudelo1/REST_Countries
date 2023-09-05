const CountryCard = ({ country }) => {
  const capitals = country.capital?.join(", ");

  return (
    <article className="bg-white rounded-md overflow-hidden ligthTheme darkTheme">
      <header className="h-[160px] ligthTheme">
        <img
          className="h-full w-full object-cover"
          src={country.flags.svg}
          alt=""
        />
      </header>
      <section className="p-8 py-4">
        <h3 className="font-bold mb-2 text-lg line-clamp-1">
          {country.name.common}
        </h3>
        <ul>
          <li>
            <span className="font-semibold"> Population:</span>{" "}
            {country.population}
          </li>
          <li>
            <span className="font-semibold">Region:</span> {country.region}
          </li>
          <li className=" line-clamp-1">
            <span className="font-semibold">Capital: </span>
            {capitals ?? "N/A"}
          </li>
        </ul>
      </section>
    </article>
  );
};
export default CountryCard;
