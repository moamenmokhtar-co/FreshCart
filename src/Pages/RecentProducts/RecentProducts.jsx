import React, { useContext, useEffect, useState } from "react";
import style from "./RecentProducts.module.css";
import axios from "axios";
import Product from "../../componets/Product/Product";
import LoadingScreen from "../../componets/LoadingScreen/LoadingScreen";
import { wishContext } from "../../Context/WishContext";
import { useQuery } from "@tanstack/react-query";
export default function RecentProducts() {
  const [products, setProducts] = useState([]);
  const { getWishList } = useContext(wishContext);
  useEffect(() => {
    getWishList();
    window.scrollTo(0, 0);
  }, []);

  const getProducts = () => {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
  };

  const { data, isLoading } = useQuery({
    queryKey: ["allProducts"],
    queryFn: getProducts,
  });

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <div
        className={`container-custom items-center justify-center ${
          isLoading
            ? ""
            : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
        }`}
      >
        {data?.data.data.map((product, index) => (
          <Product product={product} key={index} />
        ))}
      </div>
    </>
  );
}
