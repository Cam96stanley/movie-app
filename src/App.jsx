import { BrowserRouter as Router, Routes, Route } from "react-router";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Header handleToggle={toggleDarkMode} darkMode={darkMode} />
            }
          >
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
