import React, { useContext, useEffect, useState } from "react";
import style from "./DarkIcon.module.css";
import { darkMode } from "../../Context/DarkModeContext";
export default function DarkIcon() {
  const [first, setFirst] = useState(0);
  const { isDarkMode, setIsDarkMode } = useContext(darkMode);

  useEffect(() => {}, []);

  return (
    <>
      <button
        className="col-span-1 mx-auto"
        onClick={() => {
          if (isDarkMode) {
            localStorage.setItem("theme", "light");
          } else {
            localStorage.setItem("theme", "dark");
          }
          setIsDarkMode((prevDarkMode) => !prevDarkMode);
        }}
      >
        {isDarkMode ? (
          <i className="fa-solid fa-moon text-logo-color text-2xl"></i>
        ) : (
          <i className="fa-solid fa-sun text-logo-color text-2xl"></i>
        )}
      </button>
    </>
  );
}
