import { configureStore } from "@reduxjs/toolkit";

import todoReducer from "../Slices/Admin/popupSlice";
import formReducer from "../Slices/Admin/formSlice";
import { adminApi } from "../Api/Admin/authSlice";

export const store = configureStore({
  reducer: {
    popup: todoReducer,
    form: formReducer,
    [adminApi.reducerPath]: adminApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(adminApi.middleware),
});
