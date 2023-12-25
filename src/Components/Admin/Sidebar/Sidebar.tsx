import "./Sidebar.scss";
import { Link } from "react-router-dom";

// Images
import logo from "../../User/Navbar/Assets/logo.png";
import booking from "./Assets/calendar.png";
import payment from "./Assets/money.png";
import theater from "./Assets/theater.png";
import gift from "./Assets/gift.png";
import decoration from "./Assets/decoration.png"
import addon from "./Assets/addon.png"
import cake from "./Assets/cake.png"

import logout from "./Assets/logout.png";

// Popup
// import Popup from "../Popup/Popup";

const Sidebar = () => {
  return (
    <section className="sidebar">
      <div className="top">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>

        <div className="links">
          <div className="link">
            <img src={booking} alt="" />
            <Link to="/admin/todays-booking">Today's Booking</Link>
          </div>
          <div className="link">
            <img src={payment} alt="" />
            <Link to="/admin/payments">Payments</Link>
          </div>
          <div className="link">
            <img src={theater} alt="" />
            <Link to="/admin/theaters">Theaters</Link>
          </div>
          <div className="link">
            <img src={decoration} alt="" />
            <Link to="/admin/decorations">Decorations</Link>
          </div>
          <div className="link">
            <img src={cake} alt="" />
            <Link to="/admin/cakes">Cakes</Link>
          </div>
          <div className="link">
            <img src={addon} alt="" />
            <Link to="/admin/add-ons">Add ons</Link>
          </div>
        </div>
      </div>

      <div className="logout">
        <div className="link">
          <img src={logout} alt="" />
          <Link to="/">Logout</Link>
        </div>
      </div>

      {/* <Popup /> */}
    </section>
  );
};

export default Sidebar;
