import React, { useContext, useEffect, useState } from "react";
import style from "./Product.module.css";
import { Link } from "react-router-dom";
import { addProductToCart } from "../../CartServices/cartServices";
import { CartContxet } from "../../Context/CartContext";
import { wishContext } from "../../Context/WishContext";
import axios from "axios";
import { verifyWishItem } from "../../WishServices/wishServices";
// let wishArray = [];
// let currenWish = "";
export default function Product({
  product: { imageCover, category, title, price, ratingsAverage, id },
  index,
}) {
  let { wishArray, setWishArray, wishArrayList, setWishArrayList } =
    useContext(wishContext);

  let { setCartCount } = useContext(CartContxet);

  return (
    <>
      <div className="relative flex w-full mx-auto max-w-xs flex-col overflow-hidden rounded-lg bg-white group">
        <Link to={`/productdetails/${id}`} key={index}>
          <div className="relative mx-3 mt-3 flex   overflow-hidden rounded-xl justify-center items-center">
            <img
              className="object-cover max-w-[84%] hover:scale-110 transition-transform"
              src={imageCover}
              alt="product image"
            />
          </div>
        </Link>
        <div className="absolute top-0 left-0 right-0 px-8 py-2 flex items-center justify-between">
          <span className="rounded-full bg-black px-2 text-center text-sm font-medium text-white">
            39% OFF
          </span>
          <button
            onClick={() =>
              verifyWishItem(
                id,
                wishArray,
                setWishArray,
                wishArrayList,
                setWishArrayList
              )
            }
            className={`fa-solid fa-heart fa-xl opacity-100 md:opacity-0 group-hover:opacity-100 hover:scale-125 text-gray-500 ${
              wishArray?.includes(id) ? "wish" : ""
            }`}
          ></button>
        </div>
        <div className="p-3 text-start">
          <p className="text-gray-600 text-center p-3 dark:text-second-dark-color">
            {category.name}
          </p>
          <p className="tracking-tight text-slate-900 line-clamp-1 font-medium sm:text-center text-xl sm:text-2xl lg:text-start lg:text-xl">
            {title}
          </p>
          <div className="mt-2 mb-5 flex flex-wrap items-center justify-between gap-y-3 *:w-1/2 *:sm:w-full sm:justify-center md:justify-between *:xl:w-1/2">
            <p className="sm:text-center xl:text-start sm:order-2 xl:order-1 ">
              <span className="text-3xl font-bold text-slate-900">
                ${price}
              </span>
            </p>
            <div className="flex items-center justify-center mx-auto sm:order-1 xl:order-2">
              {[1, 2, 3, 4, 5].map((star, index) => {
                const fullStar = star <= Math.floor(ratingsAverage); // نجمة كاملة
                const halfStar =
                  star === Math.ceil(ratingsAverage) &&
                  ratingsAverage % 1 !== 0; // نصف نجمة

                return (
                  <i
                    key={index}
                    className={
                      fullStar
                        ? "fas fa-star text-green-color"
                        : halfStar
                        ? "fas fa-star-half-alt text-green-color"
                        : "fas fa-star text-gray-200"
                    }
                  ></i>
                );
              })}

              <span className="px-2 ">
                <span className=" rounded bg-green-cotext-green-color text-black px-3 py-0.5 text-xs font-semibold">
                  {ratingsAverage}
                </span>
              </span>
            </div>
          </div>
          <button
            onClick={() => addProductToCart(id, setCartCount)}
            href="#"
            className="flex gap-2 items-center justify-center rounded-md bg-transparent border border-green-color text-green-color px-5 py-2.5 text-center text-sm font-medium hover:bg-green-color hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 transition-colors duration-300 dark:bg-[#00623A] dark:text-light-color"
          >
            <i className="fas fa-cart-plus"></i>
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
}
