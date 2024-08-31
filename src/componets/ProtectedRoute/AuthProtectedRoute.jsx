import React, { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { Navigate } from "react-router-dom";

export default function AuthProtectedRoute({ children }) {
  const { userLogin } = useContext(UserContext);

  return userLogin ? <Navigate to="/" /> : children;
}
