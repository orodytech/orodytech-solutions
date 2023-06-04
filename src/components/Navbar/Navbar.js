import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.png";
import Button from "../Shared/Button";
import "./navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const Menu = () => (
    <>
      <p>
        <Link to="/">Home</Link>
      </p>
      <p>
        <Link to="/features">Features</Link>
      </p>
      <p>
        <Link to="/about">About</Link>
      </p>
    </>
  );

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <div className={navbar ? "tech__navbar active" : "tech__navbar"}>
      <div>
        <Link to="/">
          <div className="tech__navbar-links_logo">
            <img src={logo} alt="logo" />
          </div>
        </Link>
      </div>
      <div className="tech__navbar-links">
        <div className="tech__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="tech__navbar-contact">
        <Link to="/about">
          <p>About Us</p>
        </Link>
        <Link to="/contact">
          {" "}
          <Button>Contact Us</Button>
        </Link>
      </div>
      <div className="tech__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="tech__navbar-menu_container slide-left">
            <div className="tech__navbar-menu_container-links">
              <Menu />
              <div className="tech__navbar-menu_container-links-contact">
                <Link to="/about">
                  <p>About Us</p>
                </Link>
                <Link to="/contact">
                  {" "}
                  <Button>Contact Us</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
