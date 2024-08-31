import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Login from "../../Pages/Login/Login";
import { UserContext } from "../../Context/UserContext";

export default function ProtectedRoute({ children }) {
  let { userLogin } = useContext(UserContext);
  return userLogin ? children : <Login />;
}
