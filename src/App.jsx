import { HashRouter as Router, Routes, Route } from "react-router";
import { getDatabase, ref, set, remove, push } from "firebase/database";
import app from "../firebaseConfig";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Watchlist from "./pages/Watchlist";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState([]);
  const [addedMovies, setAddedMovies] = useState([]);

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

  const saveData = async (movie) => {
    try {
      const db = getDatabase(app);
      const newDocRef = push(ref(db, "watchlist"));
      await set(newDocRef, {
        imdbID: movie.imdbID,
        title: movie.Title,
        poster: movie.Poster,
        ratings: movie.Ratings[0]?.Value || "No rating available",
        plot: movie.Plot || "No plot available",
      });
      setAddedMovies((prevMovies) => [...prevMovies, movie.imdbID]);
    } catch (error) {
      console.error("Error saving movie:", error);
    }
  };

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
                  saveData={saveData}
                  addedMovies={addedMovies}
                />
              }
            />
            <Route path="/watchlist" element={<Watchlist />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
