import { useEffect, useState } from "react";

const Navbar = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleChangeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  useEffect(() => {
    isDarkTheme
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [isDarkTheme]);

  return (
    <nav className="flex justify-between p-4 py-6 ligthTheme darkTheme">
      <h1 className="font-bold">Where in the world?</h1>
      <button
        onClick={handleChangeTheme}
        className="flex items-center gap-1 font-semibold"
      >
        {isDarkTheme ? (
          <i className="bx bxs-moon"></i>
        ) : (
          <i className="bx bx-moon"></i>
        )}
        Dark Mode
      </button>
    </nav>
  );
};
export default Navbar;
