import { configureStore } from "@reduxjs/toolkit";

import todoReducer from "../Slices/Admin/popupSlice";
import formReducer from "../Slices/Admin/formSlice";


export const store = configureStore({
  reducer: {
    popup: todoReducer,
    form: formReducer
  },
});


export type RootState = ReturnType<typeof store.getState>;
