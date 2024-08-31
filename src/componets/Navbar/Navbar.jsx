import React, { useContext, useEffect, useState } from "react";
import style from "./Navbar.module.css";
import logo from "../../assets/images/logo.svg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import { CartContxet } from "../../Context/CartContext";
import { wishContext } from "../../Context/WishContext";

export default function Navbar() {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  let { userLogin, setUserLogin } = useContext(UserContext);
  let navigate = useNavigate();

  const { cartCount } = useContext(CartContxet);
  const { setWishArray } = useContext(wishContext);

  function logout() {
    localStorage.removeItem("userToken");
    setUserLogin("");
    navigate("/login");
    setWishArray([]);
  }
  function toggleProfileMenu() {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  }
  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <nav className="bg-white fixed start-0 end-0 top-0 px-4  z-30 border-b border-b-[#303030]">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 start-0 flex items-center sm:hidden">
              {userLogin && (
                <button
                  onClick={() => toggleMenu()}
                  type="button"
                  className="relative rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-1 focus:ring-inset focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="absolute -inset-0.5"></span>
                  <span className="sr-only">Open main menu</span>

                  {!isMenuOpen && <i className="fa-solid fa-bars text-xl"></i>}

                  {isMenuOpen && <i className="fa-solid fa-x text-xl"></i>}
                </button>
              )}
            </div>
            <div
              className={`flex flex-1 items-center  sm:items-stretch  ${
                !userLogin
                  ? "justify-between"
                  : "justify-center sm:justify-start"
              }`}
            >
              <Link className="flex items-center">
                <img className="h-6 w-auto" src={logo} alt="Your Company" />
              </Link>

              {!userLogin && (
                <>
                  <div>
                    <Link
                      to="/login"
                      type="button"
                      className="text-gray-900 px-3 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    >
                      Login
                    </Link>
                    <Link
                      to="/register"
                      type="button"
                      className="text-gray-900 px-3 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    >
                      Register
                    </Link>
                  </div>
                </>
              )}

              {userLogin && (
                <div className="hidden  sm:block mx-auto">
                  <div className="flex space-x-4">
                    <NavLink
                      to="/"
                      className="relative rounded-md px-3 py-2 text-sm font-medium text-[#010101] dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white capitalize"
                      aria-current="page"
                    >
                      home
                    </NavLink>
                    <NavLink
                      to="/categories"
                      className="relative rounded-md px-3 py-2 text-sm font-medium text-[#010101] dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white capitalize"
                    >
                      categories
                    </NavLink>
                    <NavLink
                      to="/products"
                      className="relative rounded-md px-3 py-2 text-sm font-medium text-[#010101] dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white capitalize"
                    >
                      products
                    </NavLink>
                    <NavLink
                      to="/brands"
                      className="relative rounded-md px-3 py-2 text-sm font-medium text-[#010101] dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white capitalize"
                    >
                      brands
                    </NavLink>
                  </div>
                </div>
              )}
            </div>
            {userLogin && (
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="hidden sm:block">
                  <Link
                    to={"/allorders"}
                    type="button"
                    className="relative rounded-full p-1 text-gray-400 hover:text-gray-900 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="absolute -inset-1.5"></span>
                    <span className="sr-only">View notifications</span>
                    <i className="fa-solid fa-truck-fast"></i>
                  </Link>
                  <Link
                    to={"/wishlist"}
                    type="button"
                    className="relative rounded-full p-1 text-gray-400 hover:text-gray-900 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="absolute -inset-1.5"></span>
                    <span className="sr-only">View wish list</span>
                    <i className="fa-solid fa-heart"></i>
                  </Link>
                  <Link
                    to="/cart"
                    type="button"
                    className="relative rounded-full p-1 text-gray-400 hover:text-gray-900 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="absolute -inset-1.5"></span>
                    <span className="sr-only">View all orders</span>
                    <i className="fa-solid fa-basket-shopping"></i>
                    <span>{cartCount}</span>
                  </Link>
                </div>

                <div className="relative ml-3">
                  <div>
                    <button
                      onClick={() => toggleProfileMenu()}
                      type="button"
                      className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      id="user-menu-button"
                      aria-expanded="false"
                      aria-haspopup="true"
                    >
                      <span className="absolute -inset-1.5"></span>
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </button>
                  </div>

                  {isProfileMenuOpen && (
                    <div
                      className=" absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu-button"
                      tabIndex="-1"
                    >
                      <Link
                        onClick={() => setIsProfileMenuOpen(false)}
                        to={"/settings/account"}
                        type="button"
                        className="block px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        tabIndex="-1"
                        id="user-menu-item-1"
                      >
                        Settings
                      </Link>
                      <button
                        type="button"
                        onClick={() => logout()}
                        className="block px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        tabIndex="-1"
                        id="user-menu-item-2"
                      >
                        Sign out
                      </button>

                      <div className=" sm:hidden">
                        <Link
                          onClick={() => setIsProfileMenuOpen(false)}
                          to={"/allorders"}
                          type="button"
                          className="relative rounded-full px-4 py-2  text-gray-400 hover:text-gray-900 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        >
                          <span className="absolute -inset-1.5"></span>
                          <span className="sr-only">View allorders</span>
                          <i className="fa-solid fa-truck-fast"></i>
                        </Link>
                        <Link
                          onClick={() => setIsProfileMenuOpen(false)}
                          to={"/wishlist"}
                          type="button"
                          className="relative rounded-full px-4 py-2  text-gray-400 hover:text-gray-900 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        >
                          <span className="absolute -inset-1.5"></span>
                          <span className="sr-only">View heart</span>
                          <i className="fa-solid fa-heart"></i>
                        </Link>
                        <Link
                          onClick={() => setIsProfileMenuOpen(false)}
                          to="/cart"
                          type="button"
                          className="relative rounded-full px-4 py-2  text-gray-400 hover:text-gray-900 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        >
                          <span className="absolute -inset-1.5"></span>
                          <span className="sr-only">View cart</span>
                          <i className="fa-solid fa-basket-shopping"></i>
                          <span>{cartCount}</span>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {isMenuOpen && (
          <div className="sm:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <NavLink
                onClick={() => setIsMenuOpen(false)}
                to="/"
                className="block relative rounded-md px-3 py-2 text-sm font-medium text-[#010101] dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white capitalize"
                aria-current="page"
              >
                home
              </NavLink>
              <NavLink
                onClick={() => setIsMenuOpen(false)}
                to="/categories"
                className="block relative rounded-md px-3 py-2 text-sm font-medium text-[#010101] dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white capitalize"
              >
                categories
              </NavLink>
              <NavLink
                onClick={() => setIsMenuOpen(false)}
                to="/products"
                className="block relative rounded-md px-3 py-2 text-sm font-medium text-[#010101] dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white capitalize"
              >
                products
              </NavLink>
              <NavLink
                onClick={() => setIsMenuOpen(false)}
                to="/brands"
                className="block relative rounded-md px-3 py-2 text-sm font-medium text-[#010101] dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white capitalize"
              >
                brands
              </NavLink>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
