import React, { useContext, useEffect, useState } from "react";
import { useFormik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useReset } from "../../Context/ResetContext";
export default function Forgot() {
  const [isLoading, setIsLoading] = useState(false);
  const [restDiv, setRestDiv] = useState(true);
  const navigate = useNavigate();
  const { hasReset, setHasReset } = useReset();

  useEffect(() => {
    window.scrollTo(0, 0);
    setRestDiv(false);
  }, []);

  //*---------------------------------------- Yup Validation Auto 1

  let validationSchema = Yup.object().shape({
    email: Yup.string().email("Email Not Valid").required("Email Is Required"),
  });
  //*---------------------------------------- Yup Validation Auto 2

  let validationSchema2 = Yup.object().shape({
    email: Yup.string().required("Reset Code Is Required"),
  });
  //!---------------------------------------- Fire Forget

  function fireForgot(formValues) {
    setIsLoading(true);

    return axios
      .post(
        `https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`,
        formValues
      )
      .then(({ data }) => {
        if (data.statusMsg === "success") {
          setRestDiv(true);
          return Promise.resolve();
        }
        return Promise.reject();
      })
      .catch((err) => Promise.reject())
      .finally(() => setIsLoading(false));
  }

  const formikForgot = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema,
    onSubmit: (values) => {
      toast.promise(fireForgot(values), {
        loading: "Sending...",
        success: "Code sent successfully!",
        error: "Error sending code",
      });
    },
  });
  //!---------------------------------------- Reset Code Forget

  function fireResetCode(formValues) {
    setIsLoading(true);

    return axios
      .post(
        `https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode`,
        formValues
      )
      .then(({ data }) => {
        if (data.status === "Success") {
          setHasReset(true);
          navigate("/resetpassword");

          return Promise.resolve();
        }
        setHasReset(false);

        return Promise.reject();
      })
      .catch((err) => {
        setHasReset(false);

        return Promise.reject();
      })
      .finally(() => setIsLoading(false));
  }

  const formikResetCode = useFormik({
    initialValues: {
      resetCode: "",
    },
    validationSchema2,
    onSubmit: (values) => {
      toast.promise(fireResetCode(values), {
        loading: "Loading...",
        success: "Successfully Code!",
        error: "Error reset code",
      });
    },
  });

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      {/* !---------------------------------------- Fire Forget */}

      {!restDiv && (
        <div className="container-custom">
          <form
            onSubmit={formikForgot.handleSubmit}
            className="max-w-xl mx-auto"
          >
            <h2 className="text-3xl py-6 text-green-color font-bold">
              Enter Your Email
            </h2>

            <div className="relative z-0 w-full group min-h-20">
              <input
                type="email"
                name="email"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                placeholder=""
                value={formikForgot.values.email}
                onChange={formikForgot.handleChange}
                onBlur={formikForgot.handleBlur}
              />
              <label
                htmlFor="floating_email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email
              </label>
              {formikForgot.errors.email && formikForgot.touched.email && (
                <div
                  className="my-1 text-sm text-red-700 dark:bg-gray-800 dark:text-red-400"
                  role="alert"
                >
                  <p className="font-medium">{formikForgot.errors.email}</p>
                </div>
              )}
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
              {isLoading && <i className="fas fa-spinner fa-spin me-2"></i>}Send
              Code
            </button>
          </form>
        </div>
      )}

      {/* !---------------------------------------- Reset Code Forget */}

      {restDiv && (
        <div className="container-custom">
          <form
            onSubmit={formikResetCode.handleSubmit}
            className="max-w-xl mx-auto"
          >
            <h2 className="text-3xl py-6 text-green-color font-bold">
              Type The Code, Please
            </h2>

            <div className="relative z-0 w-full group min-h-20">
              <input
                type="text"
                name="resetCode"
                id="floating_resetCode"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                placeholder=""
                value={formikResetCode.values.resetCode}
                onChange={formikResetCode.handleChange}
                onBlur={formikResetCode.handleBlur}
              />
              <label
                htmlFor="floating_resetCode"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Reset Code
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
              {isLoading && <i className="fas fa-spinner fa-spin me-2"></i>}Go
              To Reset Your Password
            </button>
          </form>
        </div>
      )}
    </>
  );
}
