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

export const Cake = lazy(
  () => import("../Pages/Admin/Extras/Cake/Cake")
);
export const Decoration = lazy(
  () => import("../Pages/Admin/Extras/Decoration/Decoration")
);
export const Addon = lazy(
  () => import("../Pages/Admin/Extras/Addon/Addon")
);
export const AddTheater = lazy(
  () => import("../Pages/Admin/AddTheater/AddTheater")
);
export const MobileScreen = lazy(
  () => import("../Pages/Admin/MobileScreen/MobileScreen")
);

