import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const SideBarLayout = () => {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
};

export default SideBarLayout;
