import React, { useEffect, useRef } from "react";

// components
import BarLoader from "./BarLoader";

// css
import "../css/animations/bding.css";

// images
import crossIcon from "../img/icon/cross-circle.svg";

const ConfirmModal = ({
  onClose,
  children,
  onConfirm,
  isLoading,
  title = "Amalni tasdiqlash",
  confirmButtonText = "Tasdiqlash",
  description = "Haqiqatdan ham siz ushbu amalni bajarmoqchimisiz?",
}) => {
  const modalContentRef = useRef(null);

  // close modal if the user clicks outside the modal content
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        modalContentRef.current &&
        !modalContentRef.current.contains(event.target)
      ) {
        onClose();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [onClose]);

  // handle closing the modal with the "Escape" key
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="flex justify-center fixed inset-0 z-30 overflow-y-auto bg-111/40 backdrop-blur size-full"
    >
      {/* modal content container */}
      <div className="max-w-lg w-full px-2.5 my-auto animate-bding">
        <div
          ref={modalContentRef}
          className="bg-white space-y-6 p-5 rounded-xl"
        >
          {/* header: title and close button */}
          <div className="flex items-start gap-4 justify-between">
            {/* modal Title */}
            <h2 className="text-lg">{title}</h2>

            {/* close Button */}
            <button onClick={onClose} title="Close" aria-label="Close Modal">
              <img
                width={24}
                height={24}
                src={crossIcon}
                alt="Close icon"
                className="size-6"
              />
            </button>
          </div>

          {/* Description */}
          {description && <div className="font-medium">{description}</div>}

          {/* modal body */}
          <div className="space-y-5">{children}</div>

          {/* footer: cancel and confirm buttons */}
          <div className="flex flex-col-reverse justify-end gap-5 sm:flex-row">
            {/* cancel Button */}
            <button
              onClick={onClose}
              className="flex items-center justify-center min-w-36 h-[46px] px-5 border border-111/25 rounded-lg transition-colors hover:bg-gray-100"
            >
              Bekor qilish
            </button>

            {/* confirm Button */}
            <button
              onClick={onConfirm}
              className="flex items-center justify-center min-w-36 h-[46px] bg-teal-500 px-5 rounded-lg text-white transition-colors hover:bg-teal-400"
            >
              {isLoading ? (
                <BarLoader className="white-bar" />
              ) : (
                <span>{confirmButtonText}</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
