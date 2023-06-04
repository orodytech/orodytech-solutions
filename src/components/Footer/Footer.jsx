import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { IoMdCall, IoIosMail } from "react-icons/io";
import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../Modal/Modal";
import "./footer.css";
function Footer() {
  const today = new Date();
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="footer">
      <div className="section__area">
        <div className="footer__container">
          <div className="row">
            {/* Colum 1 */}
            <div className="col__one">
              <div className="col column__one">
                <h4>
                  <span>Our</span> Services
                </h4>
                <ul className="list__services">
                  <li>Web Development</li>
                  <li>Graphic Design</li>
                  <li>Data Science</li>
                  <li>UI/UX Design</li>
                  <li>It Consultancy</li>
                </ul>
              </div>
              {/* <hr className="footer__divider" /> */}
              {/* Colum 2 */}
              <div className="col">
                <h4>
                  <span>Quick</span> Links
                </h4>
                <ul className="list__links">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <Link to="/features">Our Services</Link>
                  </li>
                  <li>
                    <Link to="/about">Portfolio</Link>
                  </li>
                  {/* === Modal Section == */}
                  <Modal open={openModal} onClose={() => setOpenModal(false)} />
                  <li onClick={() => setOpenModal(true)}>Contact Us</li>
                </ul>
              </div>
            </div>

            {/* Colum 3 */}
            <div className="col">
              <h4>
                <span>Get</span> Intouch
              </h4>
              <ul className="list__social">
                <li>
                  <IoIosMail className="social__icon" />
                  info@orodytechsolutions.com
                </li>
                <li>
                  <IoMdCall className="social__icon" />
                  +254 701 682 388 <br /> +254 799 961 625
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/orodytech/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookF className="social__icon" /> Facebook
                  </a>
                </li>
                <li>
                  <FaTwitter className="social__icon" /> Twitter
                </li>
                <li>
                  {" "}
                  <FaInstagram className="social__icon" />
                  Instagram
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__copyright">
            <p>Orodytech Solutions | &copy; Copyright {today.getFullYear()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
