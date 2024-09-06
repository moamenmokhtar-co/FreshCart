import React, { useContext, useEffect, useState } from "react";
import style from "./DarkBtn.module.css";
import { darkMode } from "../../Context/DarkModeContext";
export default function DarkBtn() {
  const [first, setFirst] = useState(0);
  const { isDarkMode, setIsDarkMode } = useContext(darkMode);

  useEffect(() => {}, []);

  return (
    <>
      <div className="grid grid-cols-3 justify-between items-center px-3 py-2">
        <div className="col-span-2">
          <i className="fa-solid fa-moon"></i>
          <span className="text-sm ps-1">Dark Mode</span>
        </div>
        <label className="relative inline-flex items-center cursor-pointer col-span-1 ms-auto">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            onChange={() => {
              if (isDarkMode) {
                localStorage.setItem("theme" , 'light');
              } else {
                localStorage.setItem("theme", "dark");
              }
              setIsDarkMode((prevDarkMode) => !prevDarkMode);
            }}
            checked={isDarkMode}
          />
          <div className="w-9 h-5 bg-gray-200 hover:bg-gray-300 peer-focus:outline-0 peer-focus:ring-transparent rounded-full peer transition-all ease-in-out duration-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-indigo-600 hover:peer-checked:bg-indigo-700"></div>
        </label>
      </div>
    </>
  );
}
