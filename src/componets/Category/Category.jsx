import React, { useEffect, useState } from "react";
import style from "./Category.module.css";
export default function Category({ cat }) {
  const [first, setFirst] = useState(0);
  useEffect(() => {}, []);

  return (
    <>
      <div className="col-span-12 md:col-span-6 lg:col-span-4 p-4 border rounded-lg">
        <div className="relative group flex justify-center items-center h-full w-full">
          <img
            className="object-center object-cover h-full w-full rounded-lg"
            src={cat.image}
            alt="girl-image"
          />
          <div className="text-center cursor-default bg-gray-800 text-white bottom-4 z-10 absolute text-base font-medium leading-none py-3 w-36 rounded-md">
            {cat.name}
          </div>
          <div className="absolute opacity-0 group-hover:opacity-100 rounded-md transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
        </div>
      </div>
    </>
  );
}
