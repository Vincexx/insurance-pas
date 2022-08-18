import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./PrivateRoutes";

const SideBarLayout = () => {
  let isAuth = useAuth();
  return isAuth ? <Navigate to={"/dashboard"} /> : <Outlet />;
};

export default SideBarLayout;
