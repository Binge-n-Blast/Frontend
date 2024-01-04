import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCheckoutActive: false,
  date: "",
  slot: "",
  person: 6,
  price: "",
  theater: {
    theaterName: "",
    price: "",
    noOfPersons: "",
    extraPersonCost: "",
  },
  cake:{
    id:"",
    itemsName:"",
    
  }
 
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
    setPrice(state, action) {
      state.price = action.payload;
    },
    setTheater(state, action) {
      state.theater = { ...state.theater, ...action.payload };
    },
  },
});

export const {
  setCheckoutActive,
  setDate,
  setSlot,
  setPerson,
  setPrice,
  setTheater,
} = checkoutSlice.actions;
export default checkoutSlice.reducer;
