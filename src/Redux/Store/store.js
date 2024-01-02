import { configureStore } from "@reduxjs/toolkit";

//States
import todoReducer from "../Slices/Admin/popupSlice";
import formReducer from "../Slices/Admin/formSlice";
import authReducer from "../Slices/Admin/authSlice";
import checkoutReducer from "../Slices/User/checkoutSlice";

//APIs
import { adminApi } from "../Api/apiSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    popup: todoReducer,
    form: formReducer,
    checkout: checkoutReducer,
    [adminApi.reducerPath]: adminApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(adminApi.middleware),
});
