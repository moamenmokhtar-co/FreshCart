import React, { useContext, useEffect, useState } from "react";
import style from "./Profile.module.css";
import { UserContext } from "../../../Context/UserContext";
import * as Yup from "yup";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import useLogOut from "../../../Hooks/logOut";
export default function Profile() {
  const [first, setFirst] = useState(0);
  let { userEmail } = useContext(UserContext);
  const { logOut } = useLogOut();

  //*---------------------------------------- Yup Validation Auto

  let validationSchema = Yup.object().shape({
    currentPassword: Yup.string()
      .matches(
        /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
        "Password Is Invalid"
      )
      .required("Current Password Is Required"),
    password: Yup.string()
      .matches(
        /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
        "Password Is Invalid"
      )
      .required("Password Is Required"),
    rePassword: Yup.string().oneOf(
      [Yup.ref("password")],
      "Password Not Matches"
    ),
  });

  function updateLoggedUserPassword(formValues) {
    console.log(formValues);

    return axios
      .put(
        `https://ecommerce.routemisr.com/api/v1/users/changeMyPassword`,
        formValues,
        {
          headers: {
            token: localStorage.getItem("userToken"),
          },
        }
      )
      .then((data) => {
        console.log(data);
        logOut();
        return Promise.resolve();
      })

      .catch((err) => {
        let currentPasswordError =
          err.response &&
          err.response.data &&
          err.response.data.message ==
            "User recently changed password! Please login again."
            ? err.response.data.message
            : err.response.data.errors.msg;
        console.log(err);

        return Promise.reject(currentPasswordError);
      });
  }

  const formik = useFormik({
    initialValues: {
      currentPassword: "",
      password: "",
      rePassword: "",
    },
    validationSchema,
    onSubmit: (values) => {
      toast.promise(updateLoggedUserPassword(values), {
        loading: "Loading...",
        success: "Password has been changed successfully.",
        error: (err) => err || "Password Change Error",
      });
    },
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="col-span-8 overflow-hidden px-4 rounded-xl sm:bg-gray-50 sm:px-8 sm:shadow dark:bg-[#242528] dark:text-light-color">
        <div className="pt-4">
          <h1 className="py-2 text-2xl font-semibold">Account settings</h1>
          <p className="font- text-slate-600 dark:text-second-light-color">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </div>
        <hr className="mt-4 mb-8" />
        <p className="py-2 text-xl font-semibold">Email Address</p>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <p className="text-gray-600 dark:text-second-light-color">
            Your email address is: <strong className="after:contet-[''] after:absolute relative after:bg-sky-600 after:h-[.1rem] after:start-0 after:-bottom-1 after:end-0">{userEmail}</strong>
          </p>
          <button className="inline-flex text-sm font-semibold text-blue-600 underline decoration-2">
            Change
          </button>
        </div>
        <hr className="mt-4 mb-8" />
        <p className="py-2 text-xl font-semibold">Password</p>
        <div className="flex items-center">
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col flex-wrap justify-start sm:flex-row gap-4"
          >
            <label htmlFor="currentPassword">
              <span className="text-sm text-gray-500">Current Password</span>
              <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                <input
                  type="password"
                  id="currentPassword"
                  className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                  placeholder="***********"
                  value={formik.values.currentPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>

              {formik.errors.currentPassword &&
                formik.touched.currentPassword && (
                  <div
                    className="my-1 text-sm text-red-700 dark:bg-gray-800 dark:text-red-400"
                    role="alert"
                  >
                    <p className="font-medium">
                      {formik.errors.currentPassword}
                    </p>
                  </div>
                )}
            </label>
            <label htmlFor="password">
              <span className="text-sm text-gray-500">New Password</span>
              <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                <input
                  type="password"
                  id="password"
                  className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                  placeholder="***********"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>

              {formik.errors.password && formik.touched.password && (
                <div
                  className="my-1 text-sm text-red-700 dark:bg-gray-800 dark:text-red-400"
                  role="alert"
                >
                  <p className="font-medium">{formik.errors.password}</p>
                </div>
              )}
            </label>
            <label htmlFor="rePassword">
              <span className="text-sm text-gray-500">Re-Password</span>
              <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                <input
                  type="password"
                  id="rePassword"
                  className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                  placeholder="***********"
                  value={formik.values.rePassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>

              {formik.errors.rePassword && formik.touched.rePassword && (
                <div
                  className="my-1 text-sm text-red-700 dark:bg-gray-800 dark:text-red-400"
                  role="alert"
                >
                  <p className="font-medium">{formik.errors.rePassword}</p>
                </div>
              )}
            </label>
            <div>
              <p className="mt-2">
                Can't remember your current password.{" "}
                <a
                  className="text-sm font-semibold text-blue-600 underline decoration-2"
                  href="#"
                >
                  Recover Account
                </a>
              </p>
              <button
                type="submit"
                className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white"
              >
                Save Password
              </button>
            </div>
          </form>
        </div>

        <hr className="mt-4 mb-8" />

        <div className="mb-10">
          <p className="py-2 text-xl font-semibold">Delete Account</p>
          <p className="inline-flex items-center rounded-full bg-rose-100 px-4 py-1 text-rose-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            Proceed with caution
          </p>
          <p className="mt-2">
            Make sure you have taken backup of your account in case you ever
            need to get access to your data. We will completely wipe your data.
            There is no way to access your account after this action.
          </p>
          <button className="ml-auto text-sm font-semibold text-rose-600 underline decoration-2">
            Continue with deletion
          </button>
        </div>
      </div>
    </>
  );
}
