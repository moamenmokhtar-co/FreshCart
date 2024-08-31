import React, { useContext, useEffect, useState } from "react";
import style from "./WishList.module.css";
import { wishContext } from "../../Context/WishContext";
import WishItem from "../../componets/WishItem/WishItem";
import WishEmpty from "../../componets/WishEmpty/WishEmpty";
export default function WishList() {
  const { wishArray, wishArrayList, getWishList } = useContext(wishContext);
  const [isEmpty, setIsEmpty] = useState(wishArrayList);
  useEffect(() => {
    getWishList();
    window.scrollTo(0, 0);
  }, []);

  if (wishArrayList.length === 0) {
    return <WishEmpty />;
  }

  return (
    <>
      <section className="relative">
        <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
          <h2 className="font-manrope font-bold text-4xl leading-10 text-black text-center">
            Wish List 💜
          </h2>
          <p className="mt-4 font-normal text-lg leading-8 text-gray-500 mb-11 text-center">
            What are you waiting for? Add your favorite products to the cart and
            buy now
          </p>
          <div className="main-box border border-gray-200 rounded-xl pt-6 max-w-xl max-lg:mx-auto lg:max-w-full">
            {wishArrayList.map((item, index) => (
              <WishItem item={item} key={index} />
            ))}

            <div className="w-full border-t border-gray-200 px-6 flex flex-col lg:flex-row items-center justify-between ">
              <div className="flex flex-col sm:flex-row items-center max-lg:border-b border-gray-200">
                <button className="flex outline-0 py-6 sm:pr-6  sm:border-r border-gray-200 whitespace-nowrap gap-2 items-center justify-center font-semibold group text-lg text-black bg-white transition-all duration-500 hover:text-indigo-600">
                  <i className="fa-solid fa-x"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
