import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

// toaster (notification)
import { Toaster } from "react-hot-toast";

// redux
import { useSelector } from "react-redux";

// components
import Top from "../components/Top";
import Hero from "../components/Hero";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ShareModal from "../components/ShareModal";
import ScrollToTop from "../components/ScrollToTop";
import CarComplaintModal from "../components/CarComplaintModal";

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
      {modals.shareModal.isOpen && <ShareModal />}
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
        <Outlet />
      </main>

      {/* footer */}
      {!signIn && !signUp && <Footer />}

      {/* scroll to top btn */}
      <ScrollToTop />

      {/* toaster notification container */}
      <Toaster />
    </div>
  );
};
1;
export default MainLayout;
