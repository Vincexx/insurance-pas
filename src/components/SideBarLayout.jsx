import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { Navigate } from "react-router-dom";

const SideBarLayout = () => {
  let auth = { token: false };
  return auth.token ? <Outlet /> : <Navigate to="/login" />;
};

export default SideBarLayout;
