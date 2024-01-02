import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCheckoutActive: false,
  date: "",
  slot: "",
  person: 4,
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    setCheckoutActive(state, action) {
      state.isCheckoutActive = action.payload;
    },
    setDate(state, action) {
      state.date = action.payload;
    },
    setSlot(state, action) {
      state.slot = action.payload;
    },
    setPerson(state, action) {
      state.person = action.payload;
    },
  },
});

export const { setCheckoutActive, setDate, setSlot, setPerson } =
  checkoutSlice.actions;
export default checkoutSlice.reducer;
