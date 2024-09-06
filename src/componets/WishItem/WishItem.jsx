import React, { useContext, useEffect, useState } from "react";
import style from "./WishItem.module.css";
import { addProductToCart } from "../../CartServices/cartServices";
import { CartContxet } from "../../Context/CartContext";
import {
  removeFromWishList,
  verifyWishItem,
} from "../../WishServices/wishServices";
import { wishContext } from "../../Context/WishContext";
export default function WishItem({ item }) {
  const [first, setFirst] = useState(0);
  const { setCartCount } = useContext(CartContxet);
  const { wishArray, setWishArray, wishArrayList, setWishArrayList } =
    useContext(wishContext);
  useEffect(() => {}, []);

  return (
    <>
      <div className="w-full px-3 min-[400px]:px-6">
        <div className="flex flex-col lg:flex-row items-center py-6 border-b border-gray-200 gap-6 w-full">
          <div className="img-box max-lg:w-full">
            <img
              src={item.imageCover}
              alt="Premium Watch image"
              className="aspect-square w-full object-contain lg:max-w-[140px] rounded-xl"
            />
          </div>
          <div className="flex flex-row items-center w-full ">
            <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
              <div className="flex items-center">
                <div className="">
                  <h2 className="font-semibold text-xl leading-8 text-black dark:text-light-color">
                    {item.title}
                  </h2>

                  <div className="flex items-center ">
                    <p className="font-medium text-base leading-7 text-black pr-4 mr-4 border-r border-gray-200 dark:text-gold-color">
                      <span>Brand:</span>
                      <span className="text-gray-500 dark:text-second-light-color p-2">
                        {item.brand.name}
                      </span>
                    </p>
                    <p className="font-medium text-base leading-7 text-black dark:text-gold-color">
                      <span>Category:</span>
                      <span className="text-gray-500 dark:text-second-light-color p-2">
                        {item.category.name}
                      </span>
                    </p>
                  </div>
                  <button
                    onClick={() =>
                      verifyWishItem(
                        item.id,
                        wishArray,
                        setWishArray,
                        wishArrayList,
                        setWishArrayList
                      )
                    }
                    className="flex gap-2 items-center justify-center my-2 rounded-md bg-transparent border  text-red-500 px-5 py-1 text-center text-sm font-medium hover:border-red-500 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-colors duration-300"
                  >
                    <i className="fa-solid fa-x"></i>
                    Remove
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-5 py-4">
                <div className="col-span-5 lg:col-span-1 flex items-center max-lg:mt-3">
                  <div className="flex gap-3 lg:block">
                    <p className="font-medium text-xl leading-7 text-black dark:text-gold-color">
                      price
                    </p>
                    <p className="lg:mt-4 font-medium text-xl leading-7 text-indigo-600 ">
                      <span className="text-[#A58AFB]">${item.price}</span>
                    </p>
                  </div>
                </div>
                <div className="col-span-5 lg:col-span-2 flex items-center max-lg:mt-3 ">
                  <div className="flex gap-3 lg:block">
                    <p className="font-medium text-xl leading-7 text-black dark:text-gold-color">
                      Status
                    </p>
                    <p className="font-medium text-xl leading-6 whitespace-nowrap py-0.5 px-3 rounded-full lg:mt-3 bg-emerald-50 text-emerald-600">
                      In Stock
                    </p>
                  </div>
                </div>
                <div className="col-span-5 lg:col-span-2 flex items-center my-4">
                  <div className="flex gap-3 lg:block w-full lg:w-auto">
                    <button
                      onClick={() => addProductToCart(item.id, setCartCount)}
                      className="flex gap-2 items-center justify-center w-full rounded-md bg-transparent border border-green-color text-green-color px-5 py-2.5 text-center text-sm font-medium hover:bg-green-color hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 transition-colors duration-300 dark:text-logo-color dark:hover:bg-logo-color dark:hover:text-light-color"
                    >
                      <i className="fas fa-cart-plus"></i>
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
