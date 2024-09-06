import React, { useContext, useEffect, useState } from "react";
import { useFormik, validateYupSchema } from "formik";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import { paymentContext } from "../../Context/PaymentContext";
import { usePurchase } from "../../Context/PurchaseContext";
import { toast } from "react-toastify";
export default function ShippingAddress() {
  const [isLoading, setIsLoading] = useState(false);
  const { isOnlinePaymentMethoud } = useContext(paymentContext);
  const { hasPurchased, setHasPurchased } = usePurchase();
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let { cartId } = useParams();

  //*---------------------------------------- Yup Validation Auto

  let validationSchema = Yup.object().shape({
    details: Yup.string().required("Details Is Required"),
    phone: Yup.string().required("Phone Is Required"),
    city: Yup.string().required("City Is Required"),
  });

  function cheackOut(formValues) {
    setIsLoading(true);
    if (isOnlinePaymentMethoud) {
      axios
        .post(
          `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}`,
          { shippingAddress: formValues },
          {
            headers: {
              token: localStorage.getItem("userToken"),
            },
            params: {
              url: "http://localhost:5173",
            },
          }
        )
        .then(({ data }) => {
          if (data.status === "success") {
            setIsLoading(false);
            window.open(data.session.url);
          }
        })
        .catch((err) => {
          if (err.message === "Network Error") {
            toast.error(
              "Network error: Please check your internet connection and try again."
            );
          } else {
            toast.error(`This didn't work, ${err.response.data.message}`);
          }

          setIsLoading(false);
        });
    } else {
      axios
        .post(
          `https://ecommerce.routemisr.com/api/v1/orders/${cartId}`,
          { shippingAddress: formValues },
          {
            headers: {
              token: localStorage.getItem("userToken"),
            },
          }
        )
        .then(({ data }) => {
          if (data.status === "success") {
            setIsLoading(false);
            setHasPurchased(true);
            navigate("/purchasedsuccessfully");
          }
        })
        .catch((err) => {
          if (err.message === "Network Error") {
            toast.error(
              "Network error: Please check your internet connection and try again."
            );
          } else {
            toast.error(`This didn't work, ${err.response.data.message}`);
          }
          setIsLoading(false);
        });
    }
  }
  let formik = useFormik({
    initialValues: {
      details: "",
      phone: "",
      city: "",
    },
    validationSchema,
    onSubmit: cheackOut,
  });

  return (
    <>
      <div className="container-custom">
        <form onSubmit={formik.handleSubmit} className="max-w-xl mx-auto">
          <h2 className="text-3xl py-6 text-green-color font-bold">
            Add Your Address
          </h2>

          <div className="relative z-0 w-full group min-h-20">
            <input
              type="text"
              name="phone"
              id="floating_phone"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
              placeholder=""
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label
              htmlFor="floating_phone"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Phone
            </label>
          </div>
          <div className="relative z-0 w-full group min-h-20">
            <input
              type="text"
              name="city"
              id="floating_city"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
              placeholder=""
              value={formik.values.city}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label
              htmlFor="floating_city"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              City
            </label>
          </div>

          <div className="relative z-0 w-full group min-h-20">
            <input
              type="text"
              name="details"
              id="floating_details"
              className="block py-2.5 px-0 w-full text-sm text-gray-900  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
              placeholder=""
              value={formik.values.details}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label
              htmlFor="floating_details"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Details
            </label>
          </div>

          <button
            type="submit"
            className={
              isLoading
                ? "btn bg-gray-700 hover:bg-gray-800 focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                : "btn bg-green-700 hover:bg-green-800 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            }
            disabled={isLoading}
          >
            {isLoading && <i className="fas fa-spinner fa-spin me-2"></i>}Cheack
            Out
          </button>
        </form>
      </div>
    </>
  );
}
