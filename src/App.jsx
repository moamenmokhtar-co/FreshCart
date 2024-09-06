import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Pages/Layout/Layout";
import Categories from "./Pages/Categories/Categories";
import Brands from "./Pages/Brands/Brands";
import Cart from "./Pages/Cart/Cart";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Notfound from "./Pages/Notfound/Notfound";
import UserContextProvider from "./Context/UserContext";
import ProtectedRoute from "./componets/ProtectedRoute/ProtectedRoute";
import AuthProtectedRoute from "./componets/ProtectedRoute/AuthProtectedRoute";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import toast, { Toaster } from "react-hot-toast";
import { Bounce, ToastContainer } from "react-toastify";
import CartContextProvider from "./Context/CartContext";
import ShippingAddress from "./Pages/ShippingAddress/ShippingAddress";
import { Helmet } from "react-helmet";
import WishContextProvider from "./Context/WishContext";
import WishList from "./Pages/WishList/WishList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PaymentContextProvider from "./Context/PaymentContext";
import PurchasedSuccessfully from "./componets/PurchasedSuccessfully/PurchasedSuccessfully";
import { PurchaseProvider } from "./Context/PurchaseContext";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import ResetPassword from "./Pages/ResetPassword/ResetPassword";
import { ResetProvider } from "./Context/ResetContext";
import AuthResetPassword from "./componets/ProtectedRoute/AuthResetPassword";
import RecentProducts from "./Pages/RecentProducts/RecentProducts";
import AllOrders from "./Pages/AllOrders/AllOrders";
import Products from "./Pages/Products/Products";
import Home from "./Pages/Home/Home";
import LayoutSettings from "./Pages/Settings/LayoutSettings";
import Profile from "./Pages/Settings/Account/Account";
import DeveloperInfo from "./Pages/Settings/DeveloperInfo/DeveloperInfo";
import { Offline } from "react-detect-offline";
import DarkModeProvider from "./Context/DarkModeContext";
function App() {
  const requestQuery = new QueryClient();

  const x = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          index: true,
          element: (
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          ),
        },
        {
          path: "categories",
          element: (
            <ProtectedRoute>
              <Categories />
            </ProtectedRoute>
          ),
        },
        {
          path: "brands",
          element: (
            <ProtectedRoute>
              <Brands />
            </ProtectedRoute>
          ),
        },
        {
          path: "cart",
          element: (
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          ),
        },
        {
          path: "products",
          element: (
            <ProtectedRoute>
              <Products />
            </ProtectedRoute>
          ),
        },
        {
          path: "login",
          element: (
            <AuthProtectedRoute>
              <Login />
            </AuthProtectedRoute>
          ),
        },
        {
          path: "register",
          element: (
            <AuthProtectedRoute>
              <Register />
            </AuthProtectedRoute>
          ),
        },
        {
          path: "productdetails/:id",
          element: (
            <ProtectedRoute>
              <ProductDetails />
            </ProtectedRoute>
          ),
        },
        {
          path: "shippingaddress/:cartId",
          element: (
            <ProtectedRoute>
              <ShippingAddress />
            </ProtectedRoute>
          ),
        },
        {
          path: "allorders",
          element: (
            <ProtectedRoute>
              <AllOrders />
            </ProtectedRoute>
          ),
        },
        {
          path: "wishlist",
          element: (
            <ProtectedRoute>
              <WishList />
            </ProtectedRoute>
          ),
        },
        {
          path: "purchasedsuccessfully",
          element: (
            <ProtectedRoute>
              <PurchasedSuccessfully />
            </ProtectedRoute>
          ),
        },
        {
          path: "forgotpassword",
          element: (
            <AuthProtectedRoute>
              <ForgotPassword />
            </AuthProtectedRoute>
          ),
        },
        {
          path: "resetpassword",
          element: (
            <AuthResetPassword>
              <ResetPassword />
            </AuthResetPassword>
          ),
        },
        { path: "*", element: <Notfound /> },
        {
          path: "settings",
          element: (
            <ProtectedRoute>
              <LayoutSettings />
            </ProtectedRoute>
          ),
          children: [
            {
              path: "account",
              element: <Profile />,
            },
            {
              path: "developer-info",
              element: <DeveloperInfo />,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <>
      <Helmet>
        <title>FreshCart Store</title>
      </Helmet>
      <QueryClientProvider client={requestQuery}>
        <UserContextProvider>
          <PurchaseProvider>
            <PaymentContextProvider>
              <CartContextProvider>
                <WishContextProvider>
                  <ResetProvider>
                    <DarkModeProvider>
                      <RouterProvider router={x}></RouterProvider>
                      <Toaster position="top-center" reverseOrder={false} />
                      <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="colored"
                        transition:Bounce
                      />
                      <Offline>
                        <div className="fixed start-4 bottom-4 p-4 bg-[#E3E3E3] rounded-md">
                          You are offline. Some functionality may be
                          unavailable.
                        </div>
                      </Offline>
                    </DarkModeProvider>
                  </ResetProvider>
                </WishContextProvider>
              </CartContextProvider>
            </PaymentContextProvider>
          </PurchaseProvider>
        </UserContextProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
