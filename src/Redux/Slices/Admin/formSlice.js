import { createSlice } from "@reduxjs/toolkit";

const initialState = { open: false, title: "" };

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    handleFormTitle(state, action) {
      state.title = action.payload;
    },
    handleFormOpen(state) {
      state.open = true;
    },
    handleFormClose(state) {
      state.open = false;
    },
  },
});

export const { handleFormOpen, handleFormClose, handleFormTitle } =
  formSlice.actions;
export default formSlice.reducer;
