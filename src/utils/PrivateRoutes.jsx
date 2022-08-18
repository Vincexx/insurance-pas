import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { Navigate } from "react-router-dom";
import { useAuth } from "../App";

const SideBarLayout = () => {
  let isAuth = useAuth();
  return isAuth ? (
    <div className="md:flex">
      <Sidebar />
      <Outlet />
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default SideBarLayout;
