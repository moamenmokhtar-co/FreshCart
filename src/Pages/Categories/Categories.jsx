import React, { useEffect, useState } from "react";
import style from "./Categories.module.css";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingScreen from "../../componets/LoadingScreen/LoadingScreen";
import Category from "../../componets/Category/Category";

export default function Categories() {
  const [first, setFirst] = useState(0);

  useEffect(() => {
    getCategories();
    window.scrollTo(0, 0);
  }, []);

  const getCategories = () => {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/categories`);
  };

  const { data, isLoading } = useQuery({
    queryKey: ["Categories"],
    queryFn: getCategories,
  });

  if (isLoading) {
    return <LoadingScreen />;
  }
  return (
    <>
      <div className="flex flex-col jusitfy-center items-center py-8 px-4 md:px-14 border">
        <h1 className="text-3xl xl:text-4xl font-thin text-gray-800 dark:text-white pb-8">
          Shop By Category
        </h1>

        <div className="grid grid-cols-12 gap-y-8 md:gap-x-8 w-full">
          {data?.data.data.map((cat, index) => {
            if (index === 0) {
              return (
                <div
                  key={index}
                  className="col-span-12 md:col-span-6 lg:col-span-4 p-4 rounded-lg"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <Category cat={cat} />
                    {data?.data.data[index + 1] && (
                      <Category cat={data?.data.data[index + 1]} />
                    )}
                  </div>
                </div>
              );
            } else if (index !== 1) {
              return <Category cat={cat} key={index} />;
            }
            return null;
          })}
        </div>
      </div>
    </>
  );
}

// import React, { useEffect, useState } from "react";
// import style from "./Categories.module.css";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
// import Category from "../Category/Category";
// export default function Categories() {
//   const [first, setFirst] = useState(0);
//   useEffect(() => {
//     getCategories();
//   }, []);

//   const getCategories = () => {
//     return axios.get(`https://ecommerce.routemisr.com/api/v1/categories`);
//   };

//   const { data, isLoading } = useQuery({
//     queryKey: ["Categories"],
//     queryFn: getCategories,
//   });

//   console.log(data);

//   return (
//     <>
//       <div className="flex flex-col jusitfy-center items-center space-y-10">
//         <h1 className="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 text-gray-800 dark:text-white">
//           Shop By Category
//         </h1>

//         <div className="grid grid-cols-12 gap-8 w-full">
//           {data?.data.data.map((cat, index) => (
//             <Category cat={cat} key={index} />
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }
