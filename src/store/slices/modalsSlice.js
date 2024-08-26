import { createSlice } from "@reduxjs/toolkit";

export const modalsSlice = createSlice({
  name: "modals",
  initialState: {
    carComplaintModal: {
      isOpen: false,
    },
  },
  reducers: {
    openModal: (state, action) => {
      state[action.payload].isOpen = true;
    },

    closeModal: (state, action) => {
      state[action.payload].isOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalsSlice.actions;

export default modalsSlice.reducer;
