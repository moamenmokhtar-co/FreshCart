import React, { useContext, useEffect, useState } from "react";
import style from "./Cart.module.css";
import axios from "axios";
import CartIsEmpty from "../../componets/CartIsEmpty/CartIsEmpty";
import LoadingScreen from "../../componets/LoadingScreen/LoadingScreen";
import CartItem from "../../componets/CartItem/CartItem";
import Visa from "../../assets/images/Payment Methods/Visa.png";
import Master from "../../assets/images/Payment Methods/Mastercard.png";
import Apple from "../../assets/images/Payment Methods/Applepay.png";
import { Link } from "react-router-dom";
import { CartContxet } from "../../Context/CartContext";
import { paymentContext } from "../../Context/PaymentContext";
export default function Cart() {
  const [cart, setCart] = useState(null);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getUserCart();
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!cart?.numOfCartItems) {
      return setIsEmpty(true);
    }
    console.log(cart);
  }, [cart]);

  let { setCartCount } = useContext(CartContxet);
  let { isOnlinePaymentMethoud, setIsOnlinePaymentMethoud } =
    useContext(paymentContext);
  console.log(isOnlinePaymentMethoud);

  function getUserCart() {
    axios
      .get(`https://ecommerce.routemisr.com/api/v1/cart`, {
        headers: {
          token: localStorage.getItem("userToken"),
        },
      })
      .then(({ data }) => {
        setCart(data);
        setIsEmpty(false);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsEmpty(true);
        setIsLoading(false);
      });
    // console.log(error);
  }

  function clearCart(setCartCount) {
    axios
      .delete(`https://ecommerce.routemisr.com/api/v1/cart`, {
        headers: {
          token: localStorage.getItem("userToken"),
        },
      })
      .then(({ data }) => {
        setCart(data);
        setCartCount(0);
      });
  }

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : isEmpty ? (
        <CartIsEmpty />
      ) : (
        <div className="font-sans max-w-4xl md:max-w-4xl md:px-4 lg:max-w-5xl mx-auto">
          <h1 className="text-2xl font-extrabold text-gray-800 dark:text-light-color">
            Your Cart
          </h1>
          <div className="grid lg:grid-cols-5 gap-4 mt-8">
            <div className="md:col-span-3 space-y-4">
              {cart?.data?.products.map((product, index) => (
                <CartItem
                  product={product}
                  setCart={setCart}
                  key={index}
                  cart={cart}
                />
              ))}
            </div>

            <div className="bg-white md:col-span-2 rounded-md px-4 py-6 h-max shadow-[0_2px_12px_-3px_rgba(6,81,237,0.3)]">
              <ul className="text-gray-800 space-y-4">
                <li className="flex flex-wrap gap-4 text-sm">
                  Subtotal
                  <span className="ml-auto font-bold">
                    ${cart?.data?.totalCartPrice}.00
                  </span>
                </li>
                <li className="flex flex-wrap gap-4 text-sm">
                  Shipping <span className="ml-auto font-bold">$0.00</span>
                </li>
                <li className="flex flex-wrap gap-4 text-sm">
                  Tax <span className="ml-auto font-bold">$0.00</span>
                </li>
                <hr className="border-gray-300" />
                <li className="flex flex-wrap gap-4 text-sm font-bold">
                  Total
                  <span className="ml-auto">
                    ${cart?.data?.totalCartPrice}.00
                  </span>
                </li>
              </ul>

              <ul className="grid w-full gap-4 md:grid-cols-2 py-4">
                <li>
                  <input
                    type="radio"
                    id="hosting-small"
                    name="hosting"
                    className="hidden peer"
                    required
                    checked={isOnlinePaymentMethoud}
                    onChange={() => setIsOnlinePaymentMethoud(true)}
                  />
                  <label
                    htmlFor="hosting-small"
                    className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <div className="block">
                      <div className="w-full flex items-center gap-3 text-lg font-semibold">
                        <i className="fa-solid fa-credit-card"></i>
                        <p>Online</p>
                      </div>
                    </div>
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="hosting-big"
                    name="hosting"
                    className="hidden peer"
                    checked={!isOnlinePaymentMethoud}
                    onChange={() => setIsOnlinePaymentMethoud(false)}
                  />
                  <label
                    htmlFor="hosting-big"
                    className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <div className="flex items-center gap-3">
                      <i className="fa-solid fa-money-bill"></i>
                      <div className="w-full text-lg font-semibold">
                        On Delivery
                      </div>
                    </div>
                  </label>
                </li>
              </ul>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <Link
                  to={`/shippingaddress/${cart?.data?._id}`}
                  type="button"
                  className="flex items-center justify-center gap-2 text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-gray-800 hover:bg-gray-900 text-white rounded-md col-span-2"
                >
                  <span>Buy Now</span>
                  <i className="fa-solid fa-bolt"></i>
                </Link>
                <button
                  onClick={() => clearCart(setCartCount)}
                  type="button"
                  className="flex items-center justify-between text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-transparent hover:bg-gray-100 text-gray-800 border border-gray-300 rounded-md col-span-1"
                >
                  <span>Clear All</span>
                  <i className="fa-solid fa-trash"></i>
                </button>
                <Link
                  to={"/"}
                  type="button"
                  className="block text-center text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-transparent hover:bg-gray-100 text-gray-800 border border-gray-300 rounded-md col-span-1"
                >
                  Continue Shopping
                </Link>
              </div>

              <div className="mt-4 flex flex-wrap justify-center gap-4">
                <img
                  src={Visa}
                  alt="card1"
                  className="w-12 object-contain bg-gold-color rounded-lg"
                />
                <img
                  src={Master}
                  alt="card2"
                  className="w-12 object-contain bg-gold-color rounded-lg"
                />
                <img
                  src={Apple}
                  alt="card3"
                  className="w-12 object-contain bg-gold-color rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
