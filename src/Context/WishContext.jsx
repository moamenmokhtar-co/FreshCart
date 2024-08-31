import axios from "axios";
import { createContext, useEffect, useState } from "react";
export let wishContext = createContext();

export default function WishContextProvider({ children }) {
  const [wishArray, setWishArray] = useState([]);
  const [wishArrayList, setWishArrayList] = useState([]);

  function getWishList() {
    axios
      .get(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
        headers: {
          token: localStorage.getItem(`userToken`),
        },
      })
      .then(({ data }) => {
        let apiWishArray = data.data;
        apiWishArray.map((wishItem) =>
          setWishArray((prevWishList) => [
            ...new Set([...prevWishList, wishItem.id]),
          ])
        );

        setWishArrayList(apiWishArray);
      });

    console.log(wishArrayList);

  }

  useEffect(() => {
    getWishList();
  }, []);

  return (
    <wishContext.Provider
      value={{
        wishArray,
        setWishArray,
        wishArrayList,
        setWishArrayList,
        getWishList,
      }}
    >
      {children}
    </wishContext.Provider>
  );
}
