import React, { useEffect, useState } from "react";
import style from "./DeveloperInfo.module.css";
import IMGP from "../../../assets/images/IMGp.jpg";
export default function DeveloperInfo() {
  const [first, setFirst] = useState(0);
  useEffect(() => {}, []);

  return (
    <>
      <div className="col-span-8 overflow-hidden sm:px-8 sm:shadow mx-auto my-10 flex max-w-xs flex-col items-center rounded-xl border px-4 py-4 text-center md:max-w-2xl md:flex-row md:items-start md:text-left">
        <div className="w-56 mb-4 md:mr-6 md:mb-0">
          <img
            className="w-full h-56 rounded-lg object-cover"
            src={IMGP}
            alt=""
          />
        </div>
        <div className="">
          <p className="text-xl font-medium text-gray-700">Moamen Mokhtar</p>
          <p className="mb-4 text-sm font-medium text-gray-500">
            Frontend Developer
          </p>
          <div className="flex space-x-2">
            <div className="flex flex-col items-center rounded-xl bg-gray-100 px-4 py-2">
              <p className="text-sm font-medium text-gray-500">Projects</p>
              <p className="text-3xl font-medium text-gray-600">+25</p>
            </div>
            <div className="flex flex-col items-center rounded-xl bg-gray-100 px-4 py-2">
              <p className="text-sm font-medium text-gray-500">Experience</p>
              <p className="text-3xl font-medium text-gray-600">1</p>
            </div>
            <div className="flex flex-col items-center rounded-xl bg-gray-100 px-4 py-2">
              <p className="text-sm font-medium text-gray-500">Technologies</p>
              <p className="text-3xl font-medium text-gray-600">+10</p>
            </div>
            <div className=""></div>
          </div>
          <div className="mb-3"></div>
          <div className="flex space-x-2">
            <a
              href="https://wa.me/message/6YU2AOSBQARWJ1"
              className="block text-center w-full rounded-lg border-2 bg-white px-4 py-2 font-medium text-gray-500"
            >
              Message
            </a>
            <a
              href="https://www.linkedin.com/in/moamenmokhtar-co/"
              target="_blank"
              className="block text-center w-full rounded-lg border-2 border-transparent bg-blue-600 px-4 py-2 font-medium text-white"
            >
              Follow
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
