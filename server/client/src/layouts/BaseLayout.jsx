import React from "react";
import Navbar from "~/components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div  style={{ padding: "0.5rem 3.5rem"}}>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
