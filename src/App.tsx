import { useState, useEffect } from "react";
import Cursor from "./components/Cursor";
import PreloaderAnimation from "./components/PreloaderAnimation";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false); // Track fade-out effect

  useEffect(() => {
    setTimeout(() => {
      setFadeOut(true); 
    }, 6200); 

    setTimeout(() => {
      setIsLoading(false); 
    }, 6500);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div
          className={`transition-opacity duration-200 ease-in-out ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
        >
          <PreloaderAnimation />
        </div>
      ) : (
        <div className={`transition-opacity duration-200 ease-in-out ${
          fadeOut ? "opacity-100" : "opacity-0"
        }`}>
          <Navbar />
          <Cursor />
          <Home />
          <About />
          <Projects />
        </div>
      )}
    </div>
  );
}

export default App;
