import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  title: "",
  formData: { itemsName: "", details: "", price: "" },
  isEdit: false,
};

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
    setFormData(state, action) {
      state.formData = { ...state.formData, ...action.payload };
    },
    setEditItem(state, action) {
      state.isEdit = action.payload;
    },
  },
});

export const {
  handleFormOpen,
  handleFormClose,
  handleFormTitle,
  setFormData,
  setEditItem,
} = formSlice.actions;
export default formSlice.reducer;
