import { useState, useEffect } from "react";

export default function SearchBar({
  handleInputChange,
  handleSearch,
  searchValue,
  loading, // Receive loading state as a prop
}) {
  return (
    <div className="flex items-center justify-center p-28">
      <div className="flex">
        <input
          className="w-80 px-4 border-2 border-r-none border-white text-blue-500 font-md rounded-l-md focus:outline-none focus:border-blue-500 dark:bg-neutral-950 dark:border-neutral-950 dark:text-white dark:focus:outline-none dark:focus:border-red-600"
          placeholder="Search..."
          value={searchValue}
          onChange={handleInputChange}
          id="search"
          type="text"
        />
        {/* Show a loading spinner if loading is true */}
        <button
          className={`px-4 py-2 border-2 rounded-r-md transition-colors ${
            loading
              ? "bg-gray-500 border-gray-500 cursor-not-allowed"
              : "bg-blue-500 text-white border-blue-500 hover:bg-blue-600 dark:bg-red-600 dark:border-red-600"
          }`}
          onClick={handleSearch}
          disabled={loading} // Disable the button if loading
        >
          {loading ? (
            <div className="spinner-border animate-spin border-4 border-t-4 border-white rounded-full w-5 h-5"></div>
          ) : (
            "Search"
          )}
        </button>
      </div>
    </div>
  );
}
