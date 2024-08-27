import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

// components
import Top from "../components/Top";
import Hero from "../components/Hero";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/Breadcrumbs";
import ScrollToTop from "../components/ScrollToTop";
import CarComplaintModal from "../components/CarComplaintModal";

// redux
import { useSelector } from "react-redux";

const MainLayout = () => {
  const location = useLocation();
  const home = location.pathname === "/";
  const signUp = location.pathname === "/auth/signup";
  const signIn = location.pathname === "/auth/signin";
  const modals = useSelector((state) => state.modals);

  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* modals */}
      {modals.carComplaintModal.isOpen && <CarComplaintModal />}

      {/* header */}
      {!signIn && !signUp && (
        <>
          <Top />
          <Header />
        </>
      )}

      {/* hero */}
      {home && <Hero />}

      {/* main */}
      <main className="grow">
        <div className={`w-full max-w-base mx-auto px-5`}>
          {!home && !signIn && !signUp && <Breadcrumbs />}
        </div>
        <Outlet />
      </main>

      {/* footer */}
      {!signIn && !signUp && <Footer />}

      {/* scroll to top btn */}
      <ScrollToTop />
    </div>
  );
};
1;
export default MainLayout;
