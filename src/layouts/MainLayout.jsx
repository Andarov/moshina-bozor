import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

// components
import Hero from "../components/Hero";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/Breadcrumbs";

const MainLayout = () => {
  const location = useLocation();
  const home = location.pathname === "/";
  const signUp = location.pathname === "/auth/signup";
  const signIn = location.pathname === "/auth/signin";

  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="w-full min-h-screen flex flex-col font-montserrat">
      {/* top */}
      <div
        className={`${
          home ? "bg-heroBg" : "bg-white"
        } bg-cover bg-bottom bg-no-repeat z-[9999]`}
      >
        {/* header */}
        {!signIn && !signUp && <Header />}

        {/* hero */}
        {home && <Hero />}
      </div>

      {/* main */}
      <main className="grow">
        <div className={`w-full max-w-base mx-auto px-5`}>
          {!home && !signIn && !signUp && <Breadcrumbs />}
        </div>
        <Outlet />
      </main>

      {/* footer */}
      {!signIn && !signUp && <Footer />}
    </div>
  );
};

export default MainLayout;
