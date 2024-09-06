import React, { useContext, useEffect, useState } from "react";
import style from "./MobileFooter.module.css";
import { Link } from "react-router-dom";
import { CartContxet } from "../../Context/CartContext";
import { UserContext } from "../../Context/UserContext";
export default function MobileFooter() {
  const { cartCount , isCartCountLoading } = useContext(CartContxet);
  let { userLogin } = useContext(UserContext);

  const [first, setFirst] = useState(0);
  useEffect(() => {}, []);

  return (
    <>
      {userLogin && (
        <div className="md:hidden fixed -bottom-[.1rem] start-0 end-0 bg-[#EEEEEE] dark:bg-[#171717] grid grid-cols-3 justify-center text-center px-8 py-2">
          <Link
            to={"/allorders"}
            type="button"
            className="text-2xl relative rounded-full p-1 dark:text-light-color hover:text-gray-900 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            <span className="absolute -inset-1.5"></span>
            <span className="sr-only">View notifications</span>
            <i className="fa-solid fa-truck-fast"></i>
          </Link>
          <Link
            to={"/wishlist"}
            type="button"
            className="text-2xl relative rounded-full p-1 dark:text-light-color hover:text-gray-900 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            <span className="absolute -inset-1.5"></span>
            <span className="sr-only">View wish list</span>
            <i className="fa-solid fa-heart"></i>
          </Link>
          <Link
            to="/cart"
            type="button"
            className="text-2xl relative rounded-full p-1 dark:text-light-color hover:text-gray-900 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            <span className="absolute -inset-1.5"></span>
            <span className="sr-only">View all orders</span>
            <i className="fa-solid fa-basket-shopping"></i>
            <span>
              {isCartCountLoading ? (
                <i className="fa-solid fa-circle-notch fa-spin px-1"></i>
              ) : (
                <span className="px-1 bg-gold-color rounded-lg ms-1 dark:text-[#171717]">{cartCount}</span>
              )}
            </span>
          </Link>
        </div>
      )}
    </>
  );
}
