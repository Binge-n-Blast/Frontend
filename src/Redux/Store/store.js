import { configureStore } from "@reduxjs/toolkit";

//States
import todoReducer from "../Slices/Admin/popupSlice";
import formReducer from "../Slices/Admin/formSlice";
import authReducer from "../Slices/Admin/authSlice";

//APIs
import { adminApi } from "../Api/Admin/adminApiSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    popup: todoReducer,
    form: formReducer,
    [adminApi.reducerPath]: adminApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(adminApi.middleware),
});
