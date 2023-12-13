import "./Footer.scss";
import { Link } from "react-router-dom";


// Images
import logo from "../Navbar/Assets/logo.png"

const Footer = () => {
  interface Link {
    path: string;
    name: string;
  }

  const links1: Link[] = [
    {
      path: "/",
      name: "About",
    },
    {
      path: "/",
      name: "Theaters",
    },
  ];

  const links2: Link[] = [
    {
      path: "/",
      name: "Refund Policy",
    },
    {
      path: "/",
      name: "Terms & Conditions",
    },
  ];
  return (
    <footer>
      <div className="section">
        <img src={logo} alt="" />
        <p>
          2-76-9/2271, Telephone Colony,<br /> Medipally Mandal, Boduppal,<br /> Medchal
          Dist - 500092
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
        <p>+91 9392005252</p>
        <p>admin@bingedelight.com</p>
      </div>
    </footer>
  );
};

export default Footer;
