/* eslint-disable react/prop-types */
import { NavLink, Outlet } from "react-router";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import BedtimeOutlinedIcon from "@mui/icons-material/BedtimeOutlined";

export default function Header({ handleToggle, darkMode }) {
  return (
    <>
      <div className="p-2 flex justify-between items-center bg-gray-100 dark:bg-neutral-950 text-black dark:text-white">
        {/* Left side */}
        <p className="text-lg font-bold text-blue-500 dark:text-red-600">
          NextFlick
        </p>

        {/* Right side */}
        <div className="flex items-center space-x-8">
          {/* Links */}
          <div className="flex space-x-4">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? "active-link" : "default-link"
              }
            >
              Search
            </NavLink>
            <NavLink
              to="/watchlist"
              className={({ isActive }) =>
                isActive ? "active-link" : "default-link"
              }
            >
              Watchlist
            </NavLink>
          </div>

          {/* Toggle Switch */}
          <div className="flex items-center space-x-2">
            <WbSunnyOutlinedIcon className="text-yellow-400 dark:text-gray-400" />
            <button
              onClick={handleToggle}
              className="w-12 h-6 flex items-center bg-gray-300 dark:bg-gray-600 rounded-full p-1"
            >
              <div
                className={`w-4 h-4 bg-white rounded-full shadow-md transform ${
                  darkMode ? "translate-x-6" : ""
                } transition-transform`}
              ></div>
            </button>
            <BedtimeOutlinedIcon className="text-gray-600 dark:text-red-600" />
          </div>
        </div>
      </div>

      <Outlet />
    </>
  );
}
