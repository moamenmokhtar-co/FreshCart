import React, { useEffect, useState } from "react";
import style from "./Categories.module.css";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
export default function Categories() {
  const [first, setFirst] = useState(0);
  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = () => {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/categories`);
  };

  const { data, isLoading } = useQuery({
    queryKey: ["Categories"],
    queryFn: getCategories,
  });

  console.log(data);

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="2xl:mx-auto 2xl:container py-٨ px-4 sm:px-6 xl:px-20 2xl:px-0 w-full">
          <div className="flex flex-col jusitfy-center items-center space-y-10">
            <div className="flex flex-col justify-center items-center ">
              <h1 className="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 text-gray-800 dark:text-white">
                Shop By Category
              </h1>
            </div>
            <div className="grid grid-cols-12 gap-x-8 w-full">
              <div className=" order-1 col-span-12 md:col-span-6 lg:col-span-4">
                <div className="relative group flex justify-center items-center h-full w-full">
                  <img
                    className="object-center object-contain h-full w-full"
                    src="https://ecommerce.routemisr.com/Route-Academy-categories/1681511964020.jpeg"
                    alt="girl-image"
                  />
                  <button className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                    Women
                  </button>
                  <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
                </div>
              </div>

              <div className=" order-2 col-span-12 md:col-span-12 md:order-3 lg:col-span-4 lg:order-2">
                <div className="md:flex md:gap-8 lg:block ">
                <div className="relative group flex justify-center items-center h-full w-full lg:my-8">
                  <img
                    className="object-center object-cover h-full w-full"
                    src="https://i.ibb.co/SXZvYHs/irene-kredenets-DDqx-X0-7v-KE-unsplash-1.png"
                    alt="shoe-image"
                  />
                  <button className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                    Shoes
                  </button>
                  <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
                </div>

                <div className="relative group flex justify-center items-center h-full w-full">
                  <img
                    className="object-center object-cover h-full w-full"
                    src="https://i.ibb.co/Hd1pVxW/louis-mornaud-Ju-6-TPKXd-Bs-unsplash-1-2.png"
                    alt="watch-image"
                  />
                  <button className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                    Watches
                  </button>
                  <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
                </div>
                </div>
              </div>

              <div className=" order-3 col-span-12 md:col-span-6 md:order-2 lg:col-span-4">
                <div className="relative group justify-center items-center h-full w-full flex">
                  <img
                    className="object-center object-contain h-full w-full"
                    src="https://ecommerce.routemisr.com/Route-Academy-categories/1681511964020.jpeg"
                    alt="girl-image"
                  />
                  <button className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                    Accessories
                  </button>
                  <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
