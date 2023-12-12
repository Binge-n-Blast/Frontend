import { lazy } from "react";

export const Login = lazy(() => import("../Pages/Admin/Login/Login"));
export const TodaysBooking = lazy(
  () => import("../Pages/Admin/TodaysBooking/TodaysBooking")
);
