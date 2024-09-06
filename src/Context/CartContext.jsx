import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { UserContext } from "./UserContext";

export const CartContxet = createContext();

export default function CartContextProvider({ children }) {
  const { userLogin } = useContext(UserContext);

  const [cartCount, setCartCount] = useState(null);
  const [isCartCountLoading, setIsCartCountLoading] = useState(true);

  useEffect(() => {
    userLogin && getCartCount();
  }, [userLogin]);

  // let { cartId } = useParams();

  function getCartCount() {
    axios
      .get(`https://ecommerce.routemisr.com/api/v1/cart`, {
        headers: {
          token: localStorage.getItem("userToken"),
        },
      })
      .then(({ data }) => setCartCount(data.numOfCartItems))
      .catch(() => setCartCount(0))
      .finally(()=>setIsCartCountLoading(false));
  }

  // function cheackOut(formValues) {
  //   setIsLoading(true);

  //   axios
  //     .post(
  //       `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}`,
  //       { shippingAddress: formValues },
  //       {
  //         headers: {
  //           token: localStorage.getItem("userToken"),
  //         },
  //         params: {
  //           url: "http://localhost:5173",
  //         },
  //       }
  //     )
  //     .then(({ data }) => {
  //       setIsLoading(false);
  //       window.open(data.session.url);
  //     })
  //     .catch(({ response: { data } }) => {
  //       setIsLoading(false);
  //     });
  // }
  return (
    <CartContxet.Provider value={{ cartCount, setCartCount , isCartCountLoading }}>
      {children}
    </CartContxet.Provider>
  );
}
