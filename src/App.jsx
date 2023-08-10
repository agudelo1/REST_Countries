import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <section
      className="font-nunito-sans bg-white dark:bg-very-dark-blue-bg
    min-h-screen transition-colors"
    >
      <Navbar />
      <Home />
    </section>
  );
}

export default App;
