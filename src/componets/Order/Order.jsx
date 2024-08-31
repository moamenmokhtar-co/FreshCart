import React, { useEffect, useState } from "react";
import style from "./Order.module.css";
export default function Order({item , shippingAddress}) {
  const [first, setFirst] = useState(0);
  useEffect(() => {
    console.log(item);
    console.log(shippingAddress);
    
  }, []);

  return (
    <>
      <div className="grid grid-cols-12 md:items-center sm:px-10 py-4 bg-white border rounded-xl my-4 sm:mt-0">
        <img
          className="col-span-12 md:col-span-3 xl:col-span-1"
          src={item.product.imageCover}
          alt=""
        />
        <div className="left col-span-12 md:col-span-9 xl:col-span-5 p-4">
          <h5 className="py-3 font-semibold">{item.product.title}</h5>
          <p>
          Quantity: {item.count}
          </p>
          <p className="py-1 ">Price Per: ${item.price}</p>
        </div>

        <div className="col-span-12 xl:col-span-5 xl:justify-self-end  p-4">
          <p className="py-3 font-semibold"> Delivery address</p>
          <p><span className="text-lg">City: {shippingAddress.city}</span> </p>
          <p><span className="text-lg">Details: {shippingAddress.details}</span></p>
          <p><span className="text-lg">Phone: {shippingAddress.phone}</span> </p>
        </div>
        {/* <div className="col-span-6 xl:col-span-3  p-4">
          <p className="py-3"> Delivery address</p>
          <p>Floyd Miles 7363 Cynthia Pass Toronto, ON N3Y 4H8</p>
        </div> */}
      </div>
    </>
  );
}
