import { BrowserRouter as Router, Routes, Route } from "react-router";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState([]);

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

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearch = () => {
    fetch(`https://www.omdbapi.com/?apikey=af0e224b&s=${searchValue}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.Response === "True") {
          const moviePromises = data.Search.map((movie) =>
            fetch(
              `https://www.omdbapi.com/?apikey=af0e224b&i=${movie.imdbID}`
            ).then((res) => res.json())
          );

          // Wait for all promises to resolve
          Promise.all(moviePromises)
            .then((detailedMovies) => {
              setMovies(detailedMovies);
            })
            .catch((error) =>
              console.error("Error fetching detailed movie data:", error)
            );
        } else {
          console.error("Search Error:", data.Error);
        }
      })
      .catch((error) => console.error("Fetch Error:", error));
  };
  console.log(movies);

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
            <Route
              index
              element={
                <Home
                  handleInputChange={handleInputChange}
                  handleSearch={handleSearch}
                  movieState={movies}
                />
              }
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
