import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet, useLocation } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
const MainLayout = () => {
  const location = useLocation();
  const home = location.pathname === "/";
  return (
    <div className="font-montserrat">
      <Header />
      <main>
        <div className="w-full max-w-base mx-auto px-5">
          {!home && <Breadcrumbs />}
        </div>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
