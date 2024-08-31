import React, { useEffect, useState } from "react";
import style from "./ResetPassword.module.css";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

export default function ResetPassword() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {}, []);
  const navigate = useNavigate();
  //*---------------------------------------- Yup Validation Auto 1

  let validationSchema = Yup.object().shape({
    email: Yup.string().email("Email Not Valid").required("Email Is Required"),
    newPassword: Yup.string().required("Password Is Required"),
  });
  function fireResetPassword(formValues) {
    setIsLoading(true);

    return axios
      .put(
        `https://ecommerce.routemisr.com/api/v1/auth/resetPassword`,
        formValues
      )
      .then(({ data }) => {
        if (data.token) {
          navigate("/login");
          console.log("Done");

          return Promise.resolve();
        }
        return Promise.reject();
      })
      .catch((err) => {
        console.log("la");

        returnPromise.reject();
      })
      .finally(() => setIsLoading(false));
  }

  let formik = useFormik({
    initialValues: {
      email: "",
      newPassword: "",
    },
    validationSchema,
    onSubmit: (values) => {
      toast.promise(fireResetPassword(values), {
        loading: "Loading...",
        success: "Reset Password Successfully!",
        error: "Error Reset",
      });
    },
  });

  return (
    <>
      <div id="content" role="main" className="w-full  max-w-md mx-auto p-6">
        <div className="mt-7 bg-white  rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700 border-2 border-indigo-300">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                Reset password
              </h1>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Remember your password?
                <Link
                to={'/login'}
                  className="text-blue-600 decoration-2 hover:underline font-medium"
                  href="#"
                >
                  Login here
                </Link>
              </p>
            </div>

            <div className="mt-5">
              <form onSubmit={formik.handleSubmit}>
                <div className="grid gap-y-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-bold ml-1 mb-2 dark:text-white"
                    >
                      Email address
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                        aria-describedby="email-error"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                      />
                    </div>

                    {formik.errors.email && formik.touched.email && (
                      <div
                        className="my-1 text-sm text-red-700 dark:bg-gray-800 dark:text-red-400"
                        role="alert"
                      >
                        <p className="font-medium">{formik.errors.email}</p>
                      </div>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-bold ml-1 mb-2 dark:text-white"
                    >
                      Password
                    </label>

                    <div className="relative">
                      <input
                        type="password"
                        id="newPassword"
                        name="newPassword"
                        className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                        aria-describedby="newPassword-error"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.newPassword}
                      />
                    </div>
                    {formik.errors.newPassword &&
                      formik.touched.newPassword && (
                        <div
                          className="my-1 text-sm text-red-700 dark:bg-gray-800 dark:text-red-400"
                          role="alert"
                        >
                          <p className="font-medium">
                            {formik.errors.newPassword}
                          </p>
                        </div>
                      )}
                  </div>
                  <button
                    type="submit"
                    className={`py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold text-white focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 ${
                      isLoading
                        ? "bg-gray-700 focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                        : "bg-blue-500 hover:bg-blue-600 focus:ring-blue-500 dark:focus:ring-offset-gray-800"
                    }`}
                    disabled={isLoading}
                  >
                    Reset password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <p className="mt-3 flex justify-center items-center text-center divide-x divide-gray-300 dark:divide-gray-700">
          <a
            className="pr-3.5 inline-flex items-center gap-x-2 text-sm text-gray-600 decoration-2 hover:underline hover:text-blue-600 dark:text-gray-500 dark:hover:text-gray-200"
            href="https://www.linkedin.com/in/moamenmokhtar-co/"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin"></i>
            View LinkedIn
          </a>
          <a
            className="pl-3 inline-flex items-center gap-x-2 text-sm text-gray-600 decoration-2 hover:underline hover:text-blue-600 dark:text-gray-500 dark:hover:text-gray-200"
            href="https://wa.me/message/6YU2AOSBQARWJ1"
          >
            Contact us!
          </a>
        </p>
      </div>
    </>
  );
}
