import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/ContextProvider";

const PrivateRoute = ({ element, ...rest }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const jwtToken = localStorage.getItem("jwtToken");
    if (!jwtToken) navigate("/login");
  }, []);
  return element;
};

export default PrivateRoute;
