import React, { useEffect, useState } from "react";
import style from "./Notfound.module.css";
import errorPage from '../../assets/images/Svgs/404error.svg'
export default function Notfound() {
  const [first, setFirst] = useState(0);
  useEffect(() => {}, []);
  
  return (
    <>
      <div className="container-custom vh flex justify-center items-center p-8"><img className="w-[36rem]" src={errorPage} alt="Error Page" /></div>
    </>
  );
}
