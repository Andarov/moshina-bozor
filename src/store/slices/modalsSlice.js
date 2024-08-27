import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carComplaintModal: { isOpen: false },
  shareModal: {
    isOpen: false,
    subject: "Sarlavha",
    message: "Xabar matni",
    link: "https://example.com",
  },
};

export const modalsSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    openModal: (state, action) => {
      const modalName = action.payload;
      if (state[modalName]) {
        state[modalName].isOpen = true;
      }
    },

    closeModal: (state, action) => {
      const modalName = action.payload;
      if (state[modalName]) {
        state[modalName].isOpen = false;
      }
    },

    updateModalValue: (state, action) => {
      const { modal, key, value } = action.payload;
      if (state[modal] && key in state[modal]) {
        state[modal][key] = value;
      }
    },
  },
});

export const { openModal, closeModal, updateModalValue } = modalsSlice.actions;

export default modalsSlice.reducer;
