import { Suspense,ReactElement } from "react";
import { Route, Routes } from "react-router-dom";

// Utils
import ScrollToTop from "./Utils/ScrollToTop";

//Pages
import Home from "./Pages/User/Home/Home";
import Fallback from "./Components/Fallback/Fallback";
import Error from "./Components/Error/Error";

// Global Components
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

// User Routes
import {
  About,
  Theaters,
  Theater,
  Refund,
  PrivacyPolicy,
  Contact
} from "./PagesImport/UserPagesImport";

//Admin Routes
import { TodaysBooking, Login } from "./PagesImport/AdminPagesImport";



//Routes Interface
export interface RoutesData {
  path: string;
  element: ReactElement;
}

// Routes Data
const userRoutesData: RoutesData[] = [
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
    path: "/contact-us",
    element: <Contact />,
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
const adminRoutesData: RoutesData[] = [
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "todays-booking",
    element: <TodaysBooking />,
  },
];

function App() {
  return (
    <ScrollToTop>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />

        {userRoutesData.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              <Suspense fallback={<Fallback />}>{route.element}</Suspense>
            }
          />
        ))}

        <Route path="/admin">
          {adminRoutesData.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                <Suspense fallback={<Fallback />}>{route.element}</Suspense>
              }
            />
          ))}
        </Route>
      </Routes>
      <Footer/>
    </ScrollToTop>
  );
}

export default App;
