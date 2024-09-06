import axios from "axios";
import { createContext, useEffect, useState } from "react";
export let wishContext = createContext();

export default function WishContextProvider({ children }) {
  const [wishArray, setWishArray] = useState([]);
  const [wishArrayList, setWishArrayList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function getWishList() {
    setIsLoading(true);
    axios
      .get(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
        headers: {
          token: localStorage.getItem(`userToken`),
        },
      })
      .then(({ data }) => {
        let apiWishArray = data.data;

        let wishArrayIds = new Set(apiWishArray.map((wishItem) => wishItem.id));
        setWishArray([...wishArrayIds]);
        setWishArrayList(apiWishArray);
        setIsLoading(false);
      });
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
        isLoading,
      }}
    >
      {children}
    </wishContext.Provider>
  );
}
