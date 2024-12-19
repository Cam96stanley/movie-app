import { useEffect, useState } from "react";
import app from "../../firebaseConfig";
import { getDatabase, ref, get, remove } from "firebase/database";
import WatchlistCard from "../components/WatchlistCard";

export default function Watchlist() {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const fetchWatchlist = async () => {
      try {
        const db = getDatabase(app);
        const dbRef = ref(db, "watchlist");
        const snapshot = await get(dbRef);

        if (snapshot.exists()) {
          const data = snapshot.val();
          const moviesWithKeys = Object.keys(data).map((key) => ({
            firebaseKey: key,
            ...data[key],
          }));
          setWatchlist(moviesWithKeys);
        } else {
          return;
        }
      } catch (error) {
        console.error("Error fetching watchlist data:", error);
      }
    };

    fetchWatchlist();
  }, []);

  const removeData = async (movie) => {
    try {
      const db = getDatabase(app);
      const dbRef = ref(db, `watchlist/${movie.firebaseKey}`); // Use the correct key here
      await remove(dbRef); // Remove the movie from Firebase

      // Update the local state to reflect the removal
      setWatchlist((prevWatchlist) =>
        prevWatchlist.filter((item) => item.imdbID !== movie.imdbID)
      );
    } catch (error) {
      console.error("Error removing movie:", error);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 dark:text-white p-4">
      <h1 className="text-2xl font-bold mb-4">Your Watchlist</h1>
      {watchlist.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {watchlist.map((movie) => (
            <WatchlistCard
              key={movie.imdbID}
              movie={movie}
              removeData={removeData}
            />
          ))}
        </div>
      ) : (
        <p className="text-center">No movies in your watchlist</p>
      )}
    </div>
  );
}
