import React, { useEffect, useState } from "react";
import style from "./Footer.module.css";
import logo from "../../assets/images/logo.svg";
export default function Footer() {
  const [first, setFirst] = useState(0);
  useEffect(() => {}, []);

  return (
    <>
      <footer className="bg-white sm:pt-6 lg:pt-8">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="flex flex-col items-center justify-between gap-2 border-b border-t py-6 md:flex-row">
            <div className="mb-3 text-center md:mb-0 md:text-left">
              <span className="font-bold uppercase tracking-widest text-gray-800">
              special offers
              </span>
              <p className="text-gray-500 capitalize">subscribe to receive notifications of our special offers</p>
            </div>

            <form className="flex w-full gap-2 md:max-w-md">
              <input
                placeholder="Email"
                className="w-full flex-1 rounded border bg-gray-50 px-3 py-2 text-gray-800 placeholder-gray-500 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />

              <button className="inline-block rounded bg-indigo-500 px-8 py-2 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
                Send
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div className="mb-16 grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-6 lg:gap-8">
              <div className="col-span-full lg:col-span-2">
                <div className="mb-4 lg:-mt-2">
                  <a
                    href="/"
                    className="inline-flex items-center gap-2 text-xl font-bold text-black md:text-2xl"
                    aria-label="logo"
                  >
                    <img src={logo} alt="Fresh Cart Logo" />
                  </a>
                </div>

                <p className="mb-6 text-gray-500 sm:pr-8">
                  Filler text is dummy text which has no meaning however looks
                  very similar to real text
                </p>

                <div className="flex gap-4">
                  <a
                    href="#"
                    target="_blank"
                    className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600 "
                  >
                    <i className="fab fa-instagram w-5 h-5 text-xl"></i>
                  </a>

                  <a
                    href="#"
                    target="_blank"
                    className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                  >
                    <i className="fab fa-x-twitter w-5 h-5 text-xl"></i>
                  </a>

                  <a
                    href="#"
                    target="_blank"
                    className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                  >
                    <i className="fab fa-linkedin-in w-5 h-5 text-xl"></i>
                  </a>

                  <a
                    href="#"
                    target="_blank"
                    className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                  >
                    <i className="fab fa-github w-5 h-5 text-xl"></i>
                  </a>
                </div>
              </div>

              <div>
                <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">
                  Products
                </div>

                <nav className="flex flex-col gap-4">
                  <div>
                    <a
                      href="#"
                      className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                    >
                      Overview
                    </a>
                  </div>

                  <div>
                    <a
                      href="#"
                      className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                    >
                      Solutions
                    </a>
                  </div>

                  <div>
                    <a
                      href="#"
                      className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                    >
                      Pricing
                    </a>
                  </div>

                  <div>
                    <a
                      href="#"
                      className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                    >
                      Customers
                    </a>
                  </div>
                </nav>
              </div>

              <div>
                <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">
                  Company
                </div>

                <nav className="flex flex-col gap-4">
                  <div>
                    <a
                      href="#"
                      className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                    >
                      About
                    </a>
                  </div>

                  <div>
                    <a
                      href="#"
                      className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                    >
                      Investor Relations
                    </a>
                  </div>

                  <div>
                    <a
                      href="#"
                      className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                    >
                      Jobs
                    </a>
                  </div>

                  <div>
                    <a
                      href="#"
                      className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                    >
                      Press
                    </a>
                  </div>

                  <div>
                    <a
                      href="#"
                      className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                    >
                      Blog
                    </a>
                  </div>
                </nav>
              </div>

              <div>
                <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">
                  Support
                </div>

                <nav className="flex flex-col gap-4">
                  <div>
                    <a
                      href="#"
                      className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                    >
                      Contact
                    </a>
                  </div>

                  <div>
                    <a
                      href="#"
                      className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                    >
                      Documentation
                    </a>
                  </div>

                  <div>
                    <a
                      href="#"
                      className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                    >
                      Chat
                    </a>
                  </div>

                  <div>
                    <a
                      href="#"
                      className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                    >
                      FAQ
                    </a>
                  </div>
                </nav>
              </div>

              <div>
                <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">
                  Legal
                </div>

                <nav className="flex flex-col gap-4">
                  <div>
                    <a
                      href="#"
                      className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                    >
                      Terms of Service
                    </a>
                  </div>

                  <div>
                    <a
                      href="#"
                      className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                    >
                      Privacy Policy
                    </a>
                  </div>

                  <div>
                    <a
                      href="#"
                      className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                    >
                      Cookie settings
                    </a>
                  </div>
                </nav>
              </div>
            </div>

            <p className="border-t py-8 text-center text-sm text-gray-800">
              © 2024 - Design • Built by{" "}
              <a
                className="border-b border-b-sky-500 hover:border-b-2"
                href="https://www.linkedin.com/in/moamenmokhtar-co/"
              >
                Mo'men Mokhtar
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
