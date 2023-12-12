import "./Navbar.scss";
import { useState } from "react";
import { NavLink } from "react-router-dom";

// Icons
import { FaTimes, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [color, setColor] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const handleColor = () => {
    if (window.scrollY >= 200) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", handleColor);

  interface Links {
    link: string;
    name: string;
  }

  const links: Links[] = [
    {
      link: "/",
      name: "Home",
    },
    {
      link: "/about",
      name: "About",
    },
    {
      link: "/theaters",
      name: "Theaters",
    },
    {
      link: "/contact-us",
      name: "Contact",
    },
  ];

  return (
    <nav className={color ? "color" : ""}>
      <div className="logo">
        <h1>Binge’n Blast</h1>
      </div>
      <div className={click ? "menu active" : "menu"}>
        {links.map((link, index) => (
          <NavLink key={index} to={link.link} onClick={() => setClick(!click)}>
            {link.name}
          </NavLink>
        ))}
      </div>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes style={{ color: "black" }} size={25} />
        ) : (
          <FaBars style={{ color: "black" }} size={25} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
