import StarIcon from "@mui/icons-material/Star";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export default function Card({ movieState, addedMovies, addMovieToWatchlist }) {
  // Function to check if the movie has already been added
  const isAdded = (movieId) =>
    addedMovies.some((movie) => movie.imdbID === movieId);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {movieState.map((movie) => (
        <div
          key={movie.imdbID}
          className="bg-white dark:bg-neutral-800 dark:border-2 dark:border-red-600 rounded-lg shadow-md overflow-hidden"
        >
          {/* Poster */}
          <img
            className="w-full h-64 object-cover"
            src={movie.Poster}
            alt={movie.Title}
          />

          {/* Details */}
          <div className="p-4">
            <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">
              {movie.Title}
            </h3>
            <div className="flex items-center justify-between text-sm text-neutral-700 dark:text-neutral-400 mb-2">
              {/* Rating with Star */}
              <div className="flex items-center">
                <StarIcon className="text-yellow-500 mr-1" />
                <span>
                  <strong>Rating:</strong>{" "}
                  {movie.Ratings && movie.Ratings[0]?.Value
                    ? movie.Ratings[0].Value
                    : "N/A"}
                </span>
              </div>

              {/* Add Button or "Added" Label */}
              {isAdded(movie.imdbID) ? (
                <span className="text-green-500 font-semibold">Added</span>
              ) : (
                <AddCircleOutlineIcon
                  className="text-blue-500 dark:text-red-600 cursor-pointer hover:scale-110 transition-transform"
                  onClick={() => addMovieToWatchlist(movie)}
                />
              )}
            </div>
            <p className="text-sm text-neutral-700 dark:text-neutral-400">
              <strong>Plot:</strong> {movie.Plot || "No plot available"}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
