import "./Footer.scss";
import { Link } from "react-router-dom";

// Images
import logo from "../Navbar/Assets/logo.png";

const Footer = () => {
  const links1 = [
    {
      path: "/about",
      name: "About",
    },
    {
      path: "/theaters",
      name: "Theaters",
    },
  ];

  const links2 = [
    {
      path: "/refund",
      name: "Refund Policy",
    },
    {
      path: "/privacy-policy",
      name: "Privacy Policy",
    },
  ];
  return (
    <footer>
      <div className="section">
        <img src={logo} alt="" />
        <p>
          2-76-9/2271, Telephone Colony,
          <br /> Medipally Mandal, Boduppal,
          <br /> Medchal Dist - 500092
        </p>
      </div>
      <div className="section">
        {links1.map((link, index) => (
          <Link key={index} to={link.path}>
            {link.name}
          </Link>
        ))}
      </div>
      <div className="section">
        {links2.map((link, index) => (
          <Link key={index} to={link.path}>
            {link.name}
          </Link>
        ))}
      </div>
      <div className="section">
        <p>Contact Us</p>
        <a href="tel:+6494461709">+91 9392005252</a>
        <a href="mailto:test@gmail.com">admin@bingedelight.com</a>
      </div>
    </footer>
  );
};

export default Footer;
