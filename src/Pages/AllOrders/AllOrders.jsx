import React, { useEffect, useState } from "react";
import style from "./AllOrders.module.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useQuery } from "@tanstack/react-query";
import formatDate from "../../utils/dateConvert";
import Order from '../../componets/Order/Order';
import LoadingScreen from "../../componets/LoadingScreen/LoadingScreen";
import OrdersEmpty from '../../componets/OrdersEmpty/OrdersEmpty';

export default function AllOrders() {
  useEffect(() => {}, []);

  function getOrders() {
    const { id } = jwtDecode(localStorage.getItem("userToken"));
  console.log(id);

    return axios
      .get(`https://ecommerce.routemisr.com/api/v1/orders/user/${id}`);
  }

  const { data, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getOrders,
  });

  console.log(data);
  
  
  if (isLoading) {
    return <LoadingScreen />;
  }
  
  if (data?.data.length ===0) {
    return <OrdersEmpty />;
  }
  return (
    <>
      <div className="container-custom sm:px-8 lg:px-20 xl:px-8">
        <div className="text-center">
          <p className="text-2xl mb-4">
            <i className="fa-solid fa-circle-check text-green-500 me-4"></i>
            Orders Summaries
          </p>
        </div>
        {data?.data.map((order, index) => (
          <div key={index} className="bg-[#F9FAFB] mb-10 rounded-xl">
            <div className="head-title block lg:flex justify-between items-center border md:border-0 md:bg-transparent px-10 py-8">
              <h4 className="text-2xl font-bold">Order #{order.id}</h4>
              <div>
                <p><span className="font-thin leading-tight">Order Placed:</span>  {formatDate(order.createdAt)}</p>
                <p><span className="font-thin leading-tight">Total Price: </span> ${order.totalOrderPrice}</p>
                <p><span className="font-thin leading-tight">Payment Methoud: </span> {order.paymentMethodType}</p>
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
              <p className=""> Preparing to ship on March 24, 2021</p>

              <div className="py-4">
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div className="bg-blue-600 h-2.5 rounded-full w-[35%]"></div>
                </div>
              </div>
              <div className="flex justify-between">
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
