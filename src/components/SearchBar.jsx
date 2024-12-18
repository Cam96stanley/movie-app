import { useState, useEffect } from "react";

export default function SearchBar({
  handleInputChange,
  handleSearch,
  searchValue,
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
        <button
          className="px-4 py-2 bg-blue-500 text-white border-2 border-blue-500 rounded-r-md hover:bg-blue-600 transition-colors dark:bg-red-600 dark:border-red-600"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
}
