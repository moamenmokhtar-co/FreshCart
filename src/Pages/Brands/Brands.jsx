import React, { useEffect, useState } from "react";
import style from "./Brands.module.css";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
export default function Brands() {
  const [first, setFirst] = useState(0);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getBrands = () => {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/brands`);
  };

  const { data, isLoading } = useQuery({
    queryKey: ["brands"],
    queryFn: getBrands,
  });

  return (
    <>
      <div className="flex justify-between items-center flex-col lg:flex-row px-8 md:px-14 text-center md:text-start dark:text-[#fafafa]">
        <h4 className="md: text-4xl lg:text-5xl font-light py-4">
          Trusted By Many
        </h4>
        <p className="text-sm md:text-lg lg:text-xl font-extralight leading-9 py-4 lg:w-2/4">
          Over 30,000 agents and hundreds of brokerage firms have chosen
          FreshCart as their specialist in many categories.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 justify-center items-center dark:gap-8 dark:px-8">
        {data?.data.data.map((brand, index) => (
          <div className="w-[10rem] dark:w-full mx-auto" key={index}>
            <img className="w-full block " src={brand.image} alt="" />
          </div>
        ))}
      </div>
    </>
  );
}
