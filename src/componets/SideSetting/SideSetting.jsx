import React, { useEffect, useState } from "react";
import style from "./SideSetting.module.css";
import { Link, NavLink } from "react-router-dom";
export default function SideSetting() {
  const [first, setFirst] = useState(0);
  useEffect(() => {}, []);

  return (
    <>
      <div className="drob-down-icon relative my-4 w-56 sm:hidden ">
        <input
          className="peer hidden"
          type="checkbox"
          name="select-1"
          id="select-1"
        />
        <label
          htmlFor="select-1"
          className="flex w-full cursor-pointer select-none rounded-lg border p-2 px-3 text-sm text-gray-700 ring-blue-700 peer-checked:ring dark:text-light-color"
        >
          Accounts
        </label>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="pointer-events-none absolute right-0 top-3 ml-auto mr-5 h-4 text-slate-700 transition peer-checked:rotate-180"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
        <ul className="mobile-screen max-h-0 select-none flex-col overflow-hidden rounded-b-lg shadow-md transition-all duration-300 peer-checked:max-h-56 peer-checked:py-3">
          <li className="cursor-pointer text-sm hover:bg-blue-700 hover:text-light-color ">
            <Link to={"account"} className="block px-3 py-2 text-slate-600 hover:text-light-color dark:text-light-color">
              Account
            </Link>
          </li>
          <li className="cursor-pointer text-sm hover:bg-blue-700 hover:text-white">
            <Link to={"developer-info"} className="block text-slate-600 hover:text-light-color dark:text-light-color px-3 py-2 ">
              Developer-Info
            </Link>
          </li>
        </ul>
      </div>

      <div className="wide-screen col-span-2 hidden sm:block">
        <ul>
          <li className="mt-5 cursor-pointer px-2 py-2 font-semibold">
            <NavLink
              to={"developer-info"}
              className="block transition hover:text-blue-700 dark:hover:text-blue-700 dark:text-light-color"
            >
              Developer-Info
            </NavLink>
          </li>
          <li className="mt-5 cursor-pointer px-2 py-2 font-semibold">
            <NavLink
              to={"account"}
              className={"block transition hover:text-blue-700 dark:hover:text-blue-700 dark:text-light-color"}
            >
              Account
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}
