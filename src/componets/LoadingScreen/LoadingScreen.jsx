import React, { useEffect, useState } from "react";
import style from "./LoadingScreen.module.css";
export default function LoadingScreen() {
  const [first, setFirst] = useState(0);
  useEffect(() => {}, []);

  return (
    <>
      <div className="loading min-h-96 flex items-center justify-center">
        <i className="fas fa-cart-shopping fa-spin text-[6rem] text-green-color dark:text-logo-color"></i>
      </div>
    </>
  );
}
