import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

// components
import Top from "../components/Top";
import Hero from "../components/Hero";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/Breadcrumbs";
import ScrollToTop from "../components/ScrollToTop";
import ConfirmModal from "../components/ConfirmModal";

// redux
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../store/slices/modalsSlice";

const MainLayout = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const home = location.pathname === "/";
  const signUp = location.pathname === "/auth/signup";
  const signIn = location.pathname === "/auth/signin";
  const { carComplaintModal } = useSelector((state) => state.modals);

  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="w-full min-h-screen flex flex-col font-montserrat">
      {/* complaint modal */}
      {carComplaintModal.isOpen && (
        <ConfirmModal
          description={false}
          title="Shikoyat qilish"
          confirmButtonText="Yuborish"
          // onClose={() => dispatch(closeModal("carComplaintModal"))}
        >
          {/* complaint title */}
          <div className="space-y-3">
            <label htmlFor="title" className="font-medium">
              Shikoyat nomi*
            </label>

            {/* input */}
            <input
              id="title"
              name="title"
              type="text"
              maxLength={144}
              placeholder="Shikoyatingiz qisqa nomi"
              className=""
            />
          </div>

          {/* complaint description */}
          <div className="space-y-3">
            <label htmlFor="title" className="font-medium">
              Shikoyat sababi*
            </label>

            {/* input */}
            <textarea
              id="description"
              maxLength={1024}
              name="description"
              className="min-h-32 max-h-64"
              placeholder="Shikoyatingiz sababini yozing..."
            />
          </div>
        </ConfirmModal>
      )}

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
