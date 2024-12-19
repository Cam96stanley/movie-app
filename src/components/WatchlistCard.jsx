import StarIcon from "@mui/icons-material/Star";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

export default function WatchlistCard({ movie, removeData }) {
  return (
    <div className="bg-white dark:bg-neutral-800 dark:border-2 dark:border-red-600 rounded-lg shadow-md overflow-hidden">
      {/* Poster */}
      <img
        className="w-full h-64 object-cover"
        src={movie.poster}
        alt={movie.title}
      />

      {/* Details */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">
          {movie.title}
        </h3>
        <div className="flex items-center justify-between text-sm text-neutral-700 dark:text-neutral-400 mb-2">
          {/* Rating with Star */}
          <div className="flex items-center">
            <StarIcon className="text-yellow-500 mr-1" />
            <span>
              <strong>Rating:</strong> {movie.ratings ? movie.ratings : "N/A"}
            </span>
          </div>

          {/* Remove Icon */}
          <RemoveCircleOutlineIcon
            className="text-blue-400 dark:text-red-600 cursor-pointer hover:scale-110 transition-transform"
            onClick={() => removeData(movie)}
          />
        </div>
        <p className="text-sm text-neutral-700 dark:text-neutral-400">
          <strong>Plot:</strong> {movie.plot || "No plot available"}
        </p>
      </div>
    </div>
  );
}
