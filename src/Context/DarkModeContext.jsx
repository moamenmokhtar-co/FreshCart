import { createContext, useEffect, useState } from "react";

export const darkMode = createContext();

export default function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const storedTheme = localStorage.getItem("theme");
  const prefersDarkScheme = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  useEffect(() => {
    if (storedTheme) {
      setIsDarkMode(storedTheme === "dark");
    }
    // Otherwise, use the system preference
    else if (prefersDarkScheme) {
      setIsDarkMode(true);
      localStorage.setItem("theme", "dark"); // Save system preference to localStorage
    } else {
      setIsDarkMode(false);
      localStorage.setItem("theme", "light"); // Save system preference to localStorage
    }
  }, []);

  return (
    <darkMode.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </darkMode.Provider>
  );
}
