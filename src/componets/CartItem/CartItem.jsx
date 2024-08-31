import React, { useContext, useEffect, useState } from "react";
import style from "./CartItem.module.css";
import axios from "axios";
import { Bounce, toast } from "react-toastify";
import { CartContxet } from "../../Context/CartContext";

export default function CartItem({ product, setCart, cart }) {
  const [productCount, setProductCount] = useState(product.count);
  const [timeoutId, setTimeoutId] = useState(null);
  useEffect(() => {}, []);
  let { setCartCount } = useContext(CartContxet);
  async function deleteCartItem(id, setCartCount) {
    const { data } = await axios.delete(
      `https://ecommerce.routemisr.com/api/v1/cart/${id}`,
      {
        headers: {
          token: localStorage.getItem("userToken"),
        },
      }
    );

    setCart(data);

    toast.success("Product removed from cart successfully", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });

    setCartCount((prevCount) => prevCount - 1);
  }

  function updateCartItem(id, count) {
    // Immediately Input Count Value Change (User See The Count Cahnge Immediately)
    setProductCount(count);
    // 3shan lw el user da8t kza marra wra b3d yms7 timeout lw kant mawgoda
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    let newTimeoutId = setTimeout(async () => {
      const { data } = await axios.put(
        `https://ecommerce.routemisr.com/api/v1/cart/${id}`,
        {
          count: count,
        },
        {
          headers: {
            token: localStorage.getItem(`userToken`),
          },
        }
      );

      setCart(data);
    }, 1000);

    setTimeoutId(newTimeoutId);
  }

  // El LINE DA LEH LAZMAAAAA ??????

  useEffect(() => {
    setProductCount(product.count);
  }, [cart]);

  return (
    <>
      {
        <div className="flex gap-4 bg-white px-4 py-6 rounded-md shadow-[0_2px_12px_-3px_rgba(6,81,237,0.3)]">
          <div className="flex gap-4">
            <div className="w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0">
              <img
                src={product.product.imageCover}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex flex-col gap-4">
              <div>
                <h3 className="text-base font-bold text-gray-800">
                  {product.product.title}
                </h3>
                <p className="text-sm text-gray-500 mt-2 flex items-center gap-2">
                  <span className="font-semibold">Brand:</span>
                  {product.product.brand.name}
                </p>
                <p className="text-sm text-gray-500 mt-2 flex items-center gap-2">
                  <span className="font-semibold">Per:</span>${product.price}
                </p>
              </div>

              <div className="mt-auto grid grid-cols-6 items-center gap-3">
                <button
                  onClick={() =>
                    productCount != 1 &&
                    updateCartItem(product.product._id, productCount - 1)
                  }
                  disabled={productCount === 1}
                  className="disabled:cursor-not-allowed"
                >
                  <i className="fa-solid fa-circle-minus text-black "></i>
                </button>

                <input
                  type="number"
                  onBlur={() =>
                    product.count != productCount &&
                    updateCartItem(product.product._id, productCount)
                  }
                  onChange={(e) => setProductCount(Number(e.target.value))}
                  value={productCount}
                  min="1"
                  className="font-bold col-span-3 md:col-span-2 text-center text-sm text-black border rounded-lg focus:ring-0 focus:outline-0 focus:outline-offset-0 focus:shadow-none "
                />
                <button
                  onClick={() =>
                    updateCartItem(product.product._id, productCount + 1)
                  }
                >
                  <i className="fa-solid fa-circle-plus text-black"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="ml-auto flex flex-col">
            <div className="flex items-start gap-4 justify-end">
              <button>
                <i className="fa-solid fa-heart text-gray-400 "></i>
              </button>

              <button onClick={() => deleteCartItem(product.product._id, setCartCount)}>
                <i className="fa-regular fa-trash-can text-black hover:text-red-500"></i>
              </button>
            </div>
            <h3 className="text-base font-bold text-gray-800 mt-auto">
              ${product.price * productCount}.00
            </h3>
          </div>
        </div>
      }
    </>
  );
}
