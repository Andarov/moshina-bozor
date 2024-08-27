import React from "react";

// components
import BarLoader from "./BarLoader";

// images
import ModalFrame from "./ModalFrame";

const ConfirmModal = ({
  onClose,
  children,
  onConfirm,
  className = "",
  isLoading = false,
  title = "Amalni tasdiqlash",
  confirmButtonText = "Tasdiqlash",
  description = "Haqiqatdan ham siz ushbu amalni bajarmoqchimisiz?",
}) => {
  return (
    <ModalFrame
      title={title}
      onClose={onClose}
      className="space-y-6"
      description={description}
    >
      {/* modal body */}
      <div className={className}>{children}</div>

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
    </ModalFrame>
  );
};

export default ConfirmModal;
