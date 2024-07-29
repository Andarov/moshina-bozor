import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet, useLocation } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import Hero from "../components/Hero";
const MainLayout = () => {
  const location = useLocation();
  const home = location.pathname === "/";
  const signUp = location.pathname === "/signup";
  const signIn = location.pathname === "/signin";
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
        {
          !signIn && !signUp && <Header />
        }
        {home && <Hero />}
      </div>
      <main className="grow">
        <div
          className={`w-full max-w-base mx-auto px-5`}
        >
          {!home && !signIn && !signUp && <Breadcrumbs />}
        </div>
        <Outlet />
      </main>
      {
        !signIn && !signUp && <Footer />
      }
    </div>
  );
};

export default MainLayout;
