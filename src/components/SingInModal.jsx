import React from 'react';
import { Link } from 'react-router-dom';

const SignInModal = ({ isOpen, onClose }) => {
  const handleOverlayClick = (e) => {
    e.stopPropagation();
    onClose();
  };

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      {isOpen && (
        <div onClick={handleOverlayClick} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div onClick={handleModalClick} className="bg-white p-5 rounded-t-xl shadow-lg w-full max-w-md transition-transform transform translate-y-full modal">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">Tizimga kirish kerak</h2>
              <button onClick={onClose}>Yopish</button>
            </div>
            <p className="mt-3">Ushbu amalni bajarish uchun tizimga kirishingiz kerak.</p>
            <div className="mt-3">
              <Link to="/signin" className="text-blue-500">Sign In</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SignInModal;
