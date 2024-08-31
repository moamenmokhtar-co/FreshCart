import React, { useEffect, useState } from "react";
import style from "./Home.module.css";
import RecentProducts from "../RecentProducts/RecentProducts";
import WelcomeSlide from "../../componets/WelcomeSlide/WelcomeSlide";

export default function Home() {
  const [first, setFirst] = useState(0);
  useEffect(() => {}, []);

  return (
    <>
      <WelcomeSlide />

      <RecentProducts />
    </>
  );
}
