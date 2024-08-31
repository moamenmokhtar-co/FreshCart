import React, { useEffect, useState } from "react";
import style from "./Layout.module.css";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from '../../componets/Navbar/Navbar';
import Footer from '../../componets/Footer/Footer';

export default function Layout() {
  const [first, setFirst] = useState(0);
  useEffect(() => {}, []);

  return (
    <>
      <Navbar />
      <section className="px-5 md:px-0 py-24 min-h-screen">
        <Outlet></Outlet>
      </section>
      <Footer />
    </>
  );
}
