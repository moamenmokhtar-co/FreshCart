import React, { useEffect, useState } from "react";
import style from "./AllOrders.module.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useQuery } from "@tanstack/react-query";
import formatDate from "../../utils/dateConvert";
import Order from "../../componets/Order/Order";
import LoadingScreen from "../../componets/LoadingScreen/LoadingScreen";
import OrdersEmpty from "../../componets/OrdersEmpty/OrdersEmpty";

export default function AllOrders() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function getOrders() {
    const { id } = jwtDecode(localStorage.getItem("userToken"));
    console.log(id);

    return axios.get(
      `https://ecommerce.routemisr.com/api/v1/orders/user/${id}`
    );
  }

  const { data, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getOrders,
  });

  console.log(data);

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (data?.data.length === 0) {
    return <OrdersEmpty />;
  }
  return (
    <>
      <div className="container-custom sm:px-8 lg:px-20 xl:px-8">
        <div className="text-center">
          <p className="text-2xl mb-4">
            <i className="fa-solid fa-circle-check text-green-500 me-4"></i>
            <span className="dark:text-light-color">Orders Summaries</span>
          </p>
        </div>
        {data?.data.map((order, index) => (
          <div
            key={index}
            className="bg-[#F9FAFB] dark:bg-[#242528] mb-10 rounded-xl"
          >
            <div className="head-title block lg:flex justify-between items-center border md:border-0 md:bg-transparent px-10 py-8">
              <h4 className="text-2xl font-bold dark:text-light-color">
                Order #{order.id}
              </h4>
              <div className="dark:text-light-color">
                <p>
                  <span className="font-thin leading-tight text-sm">
                    Order Placed:
                  </span>
                  <span className="p-3">
                    {formatDate(order.createdAt)}
                  </span>
                </p>
                <p>
                  <span className="font-thin leading-tight text-sm">
                    Total Price:
                  </span>
                  <span className="p-3">
                    ${order.totalOrderPrice}
                  </span>
                </p>
                <p>
                  <span className="font-thin leading-tight text-sm">
                    Payment Methoud:
                  </span>
                  <span className="p-3">
                    {order.paymentMethodType}
                  </span>
                </p>
              </div>
            </div>

            <div className="px-8 ">
              {order?.cartItems.map((item, index) => (
                <Order
                  key={index}
                  item={item}
                  shippingAddress={order.shippingAddress}
                />
              ))}
            </div>
            <div className="px-8 py-8">
              <p className="dark:text-light-color"> Preparing to ship on March 24, 2021</p>

              <div className="py-4">
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 ">
                  <div className="bg-blue-600 h-2.5 rounded-full w-[35%]"></div>
                </div>
              </div>
              <div className="flex justify-between dark:text-light-color">
                <p>Order placed</p>
                <p>Processing</p>
                <p>Shipped</p>
                <p>Delivered</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
