import React, { useEffect, useState } from "react";
import style from "./CartIsEmpty.module.css";
import Empty from "../../assets/images/Svgs/Empty.svg";
import { Link } from "react-router-dom";
export default function CartIsEmpty() {
  const [first, setFirst] = useState(0);
  useEffect(() => {}, []);

  return (
    <>
      <div className="container-custom px-8 md:px-0">
        <div className="flex justify-center items-center py-8">
          <div>
            <img className="w-[28rem]" src={Empty} alt="" />
            <div>
              <p className="text-center pt-8">Cart is Empty, Please Add Some Products</p>
              <Link to={'/'} className="my-8 flex gap-2 w-full items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">Continue Shopping 😉</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
