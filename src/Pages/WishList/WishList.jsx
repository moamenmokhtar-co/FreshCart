import React, { useContext, useEffect, useState } from "react";
import style from "./WishList.module.css";
import { wishContext } from "../../Context/WishContext";
import WishItem from "../../componets/WishItem/WishItem";
import WishEmpty from "../../componets/WishEmpty/WishEmpty";
import LoadingScreen from "../../componets/LoadingScreen/LoadingScreen";
export default function WishList() {
  const { wishArray, wishArrayList, getWishList, isLoading } =
    useContext(wishContext);
  const [isEmpty, setIsEmpty] = useState(wishArrayList);
  useEffect(() => {
    getWishList();
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }
  if (wishArray.length === 0) {
    return <WishEmpty />;
  }
  return (
    <>
      <section className="relative">
        <div className="w-full max-w-7xl md:px-5 lg-6 mx-auto">
          <h2 className="font-manrope font-bold text-4xl leading-10 text-black text-center dark:text-light-color">
            Wish List 💜
          </h2>
          <p className="mt-4 font-normal text-lg leading-8 text-gray-500 mb-11 text-center dark:text-second-light-color">
            What are you waiting for? Add your favorite products to the cart and
            buy now
          </p>
          <div className="main-box border border-gray-200 rounded-xl py-6 max-w-xl max-lg:mx-auto lg:max-w-full">
            {wishArrayList.map((item, index) => (
              <WishItem item={item} key={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
