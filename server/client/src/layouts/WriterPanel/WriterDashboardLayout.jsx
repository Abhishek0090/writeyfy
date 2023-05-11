import React from "react";

// import routes from "../../CustomRoutes";

import { useState, useEffect } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation, Outlet } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Soft UI Dashboard React components
import SoftBox from "~/components/SoftBox";

// Soft UI Dashboard React examples
import Sidenav from "~/components/Sidenav";

// Soft UI Dashboard React themes
import theme from "~/assets/theme";

// Soft UI Dashboard React routes
import CustomRoutes from "~/layouts/WriterPanel/CustomRoutes";

import {
  useSoftUIController,
  setMiniSidenav,
  setOpenConfigurator,
} from "~/context/index";

// Images
import brand from "~/assets/images/logo-ct.png";

const WriterDashboardLayout = () => {
  //writers Panel

  const [controller, dispatch] = useSoftUIController();
  const { miniSidenav, direction, layout, openConfigurator, sidenavColor } =
    controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const { pathname } = useLocation();

  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return (
          <Route
            exact
            path={route.route}
            element={route.component}
            key={route.key}
          />
        );
      }

      return null;
    });

  return (
    <div className="bg-blue-100">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {layout === "dashboard" && (
          <>
            <Sidenav
              color={sidenavColor}
              brand={brand}
              brandName="Writer Panel"
              routes={CustomRoutes}
              onMouseEnter={handleOnMouseEnter}
              onMouseLeave={handleOnMouseLeave}
            />
          </>
        )}

        {/* <Routes>
        {getRoutes(routes)} 
      </Routes> */}
        <Outlet />
      </ThemeProvider>
    </div>
  );
};

export default WriterDashboardLayout;
