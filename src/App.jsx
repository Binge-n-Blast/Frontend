import { Suspense, ReactElement } from "react";
import { Route, Routes } from "react-router-dom";

//CSS
import "./App.scss";

// Utils
import ScrollToTop from "./Utils/ScrollToTop";

//Pages
import Home from "./Pages/User/Home/Home";
import Fallback from "./Components/Fallback/Fallback";
import Error from "./Components/Error/Error";

// Layouts
import UserLayout from "./Layouts/User/UserLayout";
import AdminLayout from "./Layouts/Admin/AdminLayout";

// User Routes
import {
  About,
  Theaters,
  Theater,
  Refund,
  PrivacyPolicy,
} from "./PagesImport/UserPagesImport";

//Admin Routes
import {
  TodaysBooking,
  Login,
  Payments,
  AdminTheaters,
  Cake,
  Decoration,
  Addon,
  AddTheater,
} from "./PagesImport/AdminPagesImport";
import Wrapper from "./Components/Admin/Wrapper/Wrapper";



// Routes Data
const userRoutesData = [
  {
    path: "*",
    element: <Error />,
  },
  {
    path: "/theaters",
    element: <Theaters />,
  },
  {
    path: "/theater/:id",
    element: <Theater />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/refund",
    element: <Refund />,
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicy />,
  },
];
const adminRoutesData = [
  {
    path: "todays-booking",
    element: <TodaysBooking />,
  },

  {
    path: "payments",
    element: <Payments />,
  },
  {
    path: "theaters",
    element: <AdminTheaters />,
  },
  {
    path: "cakes",
    element: <Cake />,
  },
  {
    path: "decorations",
    element: <Decoration />,
  },
  {
    path: "add-ons",
    element: <Addon />,
  },
  {
    path: "add-theater",
    element: <AddTheater />,
  },
];

function App() {
  return (
    <ScrollToTop>
      <Routes>
        <Route
          path="/"
          element={
            <UserLayout>
              <Home />
            </UserLayout>
          }
        />

        {userRoutesData.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              <Suspense fallback={<Fallback />}>
                <UserLayout>{route.element}</UserLayout>
              </Suspense>
            }
          />
        ))}

        <Route path="/admin">
          <Route
            path="login"
            element={
              <Suspense fallback={<Fallback />}>
                <UserLayout>
                  <Login />
                </UserLayout>
              </Suspense>
            }
          />
          {adminRoutesData.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                <Suspense fallback={<Fallback />}>
                  <AdminLayout>
                    <Wrapper>{route.element}</Wrapper>
                  </AdminLayout>
                </Suspense>
              }
            />
          ))}
        </Route>
      </Routes>
    </ScrollToTop>
  );
}

export default App;
