import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet, useLocation } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import Hero from "../components/Hero";
const MainLayout = () => {
  const location = useLocation();
  const home = location.pathname === "/";
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="w-full min-h-screen flex flex-col font-montserrat">
      <div
        className={`${
          home ? "bg-heroBg" : "bg-white"
        } bg-cover bg-bottom bg-no-repeat z-[9999]`}
      >
        <Header />
        {home && <Hero />}
      </div>
      <main className="grow">
        <div
          className={`w-full max-w-base mx-auto px-5`}
        >
          {!home && <Breadcrumbs />}
        </div>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
