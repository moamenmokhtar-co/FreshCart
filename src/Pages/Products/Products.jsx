import React, { useEffect, useState } from "react";
import style from "./Products.module.css";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Product from "../../componets/Product/Product";
import LoadingScreen from "../../componets/LoadingScreen/LoadingScreen";
export default function Products() {
  useEffect(() => {
    window.scrollTo(0, 0);

  }, []);
  const [searched, setSearched] = useState("");

  const getProducts = () => {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
  };

  const { data, isLoading } = useQuery({
    queryKey: ["allProducts"],
    queryFn: getProducts,
  });

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <div className="w-3/4 md:w-1/2 mx-auto mb-8">
        <div className="relative   rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <i className="fa-solid fa-magnifying-glass text-gray-500 sm:text-sm"></i>
          </div>
          <input
            type="text"
            name="price"
            id="price"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Search"
            onChange={(e) => setSearched(e.target.value.toLowerCase())}
          />
          <div className="absolute inset-y-0 right-0 flex items-center">
            <label htmlFor="search" className="sr-only">
              Search
            </label>
          </div>
        </div>
      </div>

      <div
        className={`container-custom items-center justify-center ${
          isLoading
            ? ""
            : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 dark:gap-6"
        }`}
      >
        {data?.data.data
          .filter((product) => product.title.toLowerCase().includes(searched))
          .map((product, index) => (
            <Product product={product} key={index} />
          ))}
      </div>
    </>
  );
}
