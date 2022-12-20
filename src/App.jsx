import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const handleMode = () => {
    setDarkMode(!darkMode);
  };
  const spin = {
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return loading ? (
    <div className="flex justify-center items-center w-screen h-screen">
      <ClipLoader
      color={"#161414"}
      loading={loading}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
    </div>
    
  ) : (
    <div className={`overflow-hidden ${darkMode ? "dark" : ""}`}>
      <Router>
        <Navbar darkMode={darkMode} handleMode={handleMode} />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
