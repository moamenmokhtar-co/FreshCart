import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Login from "../../Pages/Login/Login";
import { UserContext } from "../../Context/UserContext";
import { useReset } from "../../Context/ResetContext";

export default function AuthResetPassword({ children }) {
  let { hasReset } = useReset();
  return hasReset ? children : <Login />;
}
