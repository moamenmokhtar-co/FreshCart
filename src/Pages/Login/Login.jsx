import React, { useContext, useEffect, useState } from "react";
import style from "./Login.module.css";
import { useFormik, validateYupSchema } from "formik";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { UserContext } from "../../Context/UserContext";
import toast from "react-hot-toast";
export default function Login() {
  const [respnseMsg, setRespnseMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let navigate = useNavigate();
  let { setUserLogin, setUserEmail } = useContext(UserContext);
  //*---------------------------------------- Custom Validation Manual
  // function myValidation(formValues) {
  //   let errors = {};
  //   if (!formValues.name) {
  //     errors.name = "Name Is Required";
  //   } else if (formValues.name.length < 2) {
  //     errors.name = "Name Must More Than 2 Character";
  //   }
  //   if (!formValues.email) {
  //     errors.email = "Email Is Required";
  //   } else if (
  //     !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
  //       formValues.email
  //     )
  //   ) {
  //     errors.email = "Email Not Valid";
  //   }
  //   if (!formValues.password) {
  //     errors.password = "Password Is Required";
  //   } else if (
  //     !/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(
  //       formValues.password
  //     )
  //   ) {
  //     errors.password = "Password Not Valid";
  //   }

  //   if (!(formValues.rePassword === formValues.password)) {
  //     errors.rePassword = "Password Not Matching";
  //   }
  //   if (!formValues.phone) {
  //     errors.phone = "Phone Number Is Required";
  //   } else if (!/^01[1250][0-9]{8}$/.test(formValues.phone)) {
  //     errors.phone = "Phone Number Not Valid";
  //   }
  //   console.log(errors);
  //   return errors;
  // }

  //*---------------------------------------- Yup Validation Auto

  let validationSchema = Yup.object().shape({
    email: Yup.string().email("Email Is Invalid").required("Email Is Required"),
    password: Yup.string().required("Password Is Required"),
  });

  function LoginForm(formValues) {
    setIsLoading(true);
    setRespnseMsg("");

    axios
      .post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, formValues)
      .then(({ data }) => {
        if (data.message === "success") {
          setRespnseMsg(data.message);
          localStorage.setItem("userToken", data.token);
          setUserLogin(data.token);
          //
          localStorage.setItem("userEmail", formValues.email);
          setUserEmail(formValues.email);
          //
          setTimeout(() => {
            location.pathname === "/login"
              ? navigate("/")
              : navigate(location.pathname);
          }, 500);

          toast.success("Login Successfully", {
            style: {
              border: "1px solid #fff",
              padding: "10px 80px",
              color: "#0DAC0C",
              boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
              marginTop: "0px",
            },
            iconTheme: {
              primary: "#0DAC0C",
              secondary: "#FFFAEE",
            },
          });
        }
        setIsLoading(false);
      })
      .catch(({ response }) => {
        setRespnseMsg(response.data.message);
        setIsLoading(false);
        toast.error(response.data.message);
      });
  }
  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: LoginForm,
  });

  return (
    <>
      <div className="container-custom">
        <form onSubmit={formik.handleSubmit} className="max-w-xl mx-auto">
          <h2 className="text-3xl py-6 text-green-color font-bold">Login</h2>

          <div className="relative z-0 w-full group min-h-20">
            <input
              type="email"
              name="email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
              placeholder=""
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
            {formik.errors.email && formik.touched.email && (
              <div
                className="my-1 text-sm text-red-700 dark:bg-gray-800 dark:text-red-400"
                role="alert"
              >
                <p className="font-medium">{formik.errors.email}</p>
              </div>
            )}
          </div>
          <div className="relative z-0 w-full group min-h-20">
            <input
              type="password"
              name="password"
              id="floating_password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
              placeholder=""
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label
              htmlFor="floating_password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
            {formik.errors.password && formik.touched.password && (
              <div
                className="my-1 text-sm text-red-700 dark:bg-gray-800 dark:text-red-400"
                role="alert"
              >
                <p className="font-medium">{formik.errors.password}</p>
              </div>
            )}
          </div>

          {respnseMsg && (
            <p
              className={
                respnseMsg === "success"
                  ? "text-green-500 text-center text-xl"
                  : "text-red-500 text-center text-xl"
              }
            >
              {respnseMsg}
            </p>
          )}

          <div className="text-end">
            <Link to="/forgotpassword" className="font-thin text-sky-600">
              Forgot Password?
            </Link>
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
            {isLoading && <i className="fas fa-spinner fa-spin me-2"></i>}Login
          </button>
          <div className="border-b border-b-orange-300/35 w-fit hover:border-b-sky-400">
            <i className="fa-solid fa-arrow-right-to-bracket me-1 "></i>
            <Link to="/register" className="font-bold">
              Create An Account
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
