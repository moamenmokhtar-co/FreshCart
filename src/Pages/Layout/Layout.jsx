import React, { useContext, useEffect, useState } from "react";
import style from "./Layout.module.css";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from "../../componets/Navbar/Navbar";
import Footer from "../../componets/Footer/Footer";
import MobileFooter from "../../componets/MobileFooter/MobileFooter";
import { darkMode } from "../../Context/DarkModeContext";

export default function Layout() {
  const [first, setFirst] = useState(0);
  const { isDarkMode } = useContext(darkMode);
  useEffect(() => {}, []);

  return (
    <>
      <div className={isDarkMode ? "dark" : "light"}>
        <Navbar />
        <section
          className={`px-5 md:px-0 py-24 min-h-screen dark:bg-[url('/src/assets/images/greenGre.jpg')] dark:bg-left`}
        >
          <Outlet></Outlet>
        </section>
        <Footer />
        <MobileFooter />
      </div>
    </>
  );
}
