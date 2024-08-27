import React from "react";

// components
import ConfirmModal from "./ConfirmModal";

// redux
import { useDispatch } from "react-redux";
import { closeModal } from "../store/slices/modalsSlice";

const CarComplaintModal = () => {
  const dispatch = useDispatch();
  const handleCloseModal = () => dispatch(closeModal("carComplaintModal"));

  return (
    <ConfirmModal
      description={false}
      className="space-y-5"
      title="Shikoyat qilish"
      onClose={handleCloseModal}
      confirmButtonText="Yuborish"
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
        <label htmlFor="description" className="font-medium">
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
  );
};

export default CarComplaintModal;
