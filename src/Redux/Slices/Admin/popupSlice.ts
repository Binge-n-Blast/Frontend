import { createSlice } from "@reduxjs/toolkit";

const initialState = { open: false };

const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    handleOpen(state) {
      state.open = true;
    },
    handleClose(state) {
      state.open = false;
    },
  },
});

export const { handleOpen, handleClose } = popupSlice.actions;
export default popupSlice.reducer;
