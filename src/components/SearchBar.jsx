export default function SearchBar() {
  return (
    <div className="flex items-center justify-center p-28">
      <div className="flex">
        <input
          className="w-80 px-4 border-2 border-r-none border-gray-300 text-blue-500 font-md rounded-l-md focus:outline-none focus:border-blue-500"
          placeholder="Search..."
          id="search"
          type="text"
        />
        <button className="px-4 py-2 bg-blue-500 text-white border-2 border-blue-500 rounded-r-md hover:bg-blue-600 transition-colors">
          Search
        </button>
      </div>
    </div>
  );
}
