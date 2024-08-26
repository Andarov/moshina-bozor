import { configureStore } from "@reduxjs/toolkit";
import modalsReducer from "../store/slices/modalsSlice";

export default configureStore({
  reducer: {
    modals: modalsReducer,
  },
});
