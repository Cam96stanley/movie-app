import SearchBar from "../components/SearchBar";
import Card from "../components/Card";

export default function Home({
  handleInputChange,
  handleSearch,
  searchValue,
  movieState,
  saveData,
  addedMovies,
  removeData,
}) {
  return (
    <div className="dark:bg-neutral-950 min-h-screen">
      <div className="bg-hero-bg bg-cover bg-center w-full">
        <SearchBar
          handleInputChange={handleInputChange}
          handleSearch={handleSearch}
          searchValue={searchValue}
        />
      </div>
      <div className="p-8">
        <Card
          movieState={movieState}
          saveData={saveData}
          addedMovies={addedMovies}
          removeData={removeData}
        />
      </div>
    </div>
  );
}
