import SearchBar from "../components/SearchBar";
import Card from "../components/Card";

export default function Home({
  handleInputChange,
  handleSearch,
  searchValue,
  movieState,
}) {
  return (
    <div className="dark:bg-neutral-950">
      <div className="bg-hero-bg bg-cover bg-center w-full">
        <SearchBar
          handleInputChange={handleInputChange}
          handleSearch={handleSearch}
          searchValue={searchValue}
        />
      </div>
      <div className="p-8">
        <Card movieState={movieState} />
      </div>
    </div>
  );
}
