import { lazy } from "react";

export const Login = lazy(() => import("../Pages/Admin/Login/Login"));
export const TodaysBooking = lazy(
  () => import("../Pages/Admin/TodaysBooking/TodaysBooking")
);
export const Payments = lazy(
  () => import("../Pages/Admin/Payments/Payments")
);

export const AdminTheaters = lazy(
  () => import("../Pages/Admin/Theaters/Theaters")
);
export const AddTheater = lazy(
  () => import("../Pages/Admin/AddTheater/AddTheater")
);