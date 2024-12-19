import { useState } from "react";
import SearchBar from "../components/SearchBar";
import Card from "../components/Card";

export default function Home({
  handleInputChange,
  handleSearch,
  searchValue,
  movieState,
  saveData,
}) {
  const [loading, setLoading] = useState(false);
  const [addedMovies, setAddedMovies] = useState([]); // Track watchlist movies

  const handleSearchWithLoading = async () => {
    setLoading(true);
    try {
      await handleSearch();
    } catch (error) {
      console.error("Error during search:", error);
    } finally {
      setLoading(false);
    }
  };

  const addMovieToWatchlist = (movie) => {
    // Add movie to the watchlist
    setAddedMovies((prevMovies) => [...prevMovies, movie]); // Update state
    saveData(movie); // Save to database
  };

  return (
    <div className="dark:bg-neutral-950 min-h-screen">
      <div className="bg-hero-bg bg-cover bg-center w-full">
        <SearchBar
          handleInputChange={handleInputChange}
          handleSearch={handleSearchWithLoading}
          searchValue={searchValue}
          loading={loading}
        />
      </div>

      {loading ? (
        <div className="flex justify-center items-center p-8">
          <div className="spinner-border animate-spin border-4 border-t-4 border-blue-500 rounded-full w-16 h-16"></div>
        </div>
      ) : (
        <div className="p-8">
          <Card
            movieState={movieState}
            addedMovies={addedMovies}
            addMovieToWatchlist={addMovieToWatchlist}
          />
        </div>
      )}
    </div>
  );
}
