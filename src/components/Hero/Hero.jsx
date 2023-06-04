import React from "react";
import { FiSend } from "react-icons/fi";
import { AiOutlineFileSearch } from "react-icons/ai";
import "./hero.css";
import heroImage from "../../assets/hero.png";
import bgVideo from "../../assets/videos/hero.mp4";
import { useState } from "react";
import Modal from "../Modal/Modal";
import Typo from "../Reused/Typo";
import Clients from "../Reused/Clients";
import Button from "../Shared/Button";
import Heading from "../Shared/Heading";

function ReadMore({ children, maxCharacterCount = 100 }) {
  const text = children;
  const [isReadmore, setIsReadmore] = useState(true);
  const resultString = isReadmore ? text.slice(0, maxCharacterCount) : text;

  function toggleIsReadMore() {
    setIsReadmore(!isReadmore);
  }
  return (
    <p className="readmore__text">
      {resultString}
      <span onClick={toggleIsReadMore} className="readmore__button">
        {isReadmore ? "...Read More" : "...Read Less"}
      </span>
    </p>
  );
}

const Hero = (props) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="hero__section">
      <div className="hero__overlay"></div>
      <video src={bgVideo} loop autoPlay muted />
      <div className="section__area1">
        <div className="hero__section-content">
          <div className="hero__content">
            <Heading>
              Empower Your Business with the Power of Technology
            </Heading>
            <ReadMore maxCharacterCount={200}>
              We are a team of experts in Data Science, Web Development, UI/UX
              Design, Graphic Design, IT Consultancy and Commercial Videography.
              At Orodytech Solutions, we are dedicated to helping businesses of
              all sizes and industries harness the power of technology to
              achieve their goals. Our team of highly qualified and experienced
              professionals specializes in creating customized solutions that
              drive growth and success for our clients.
            </ReadMore>
            <div className="hero__btns">
              {/* === Modal Section == */}
              <Modal open={openModal} onClose={() => setOpenModal(false)} />
              <div onClick={() => setOpenModal(true)}>
                <Button>
                  Get Started <FiSend />
                </Button>
              </div>
              <div>
                <Button version="secondary">
                  Portfolio <AiOutlineFileSearch />{" "}
                </Button>
              </div>
            </div>
            <div className="client__section">
              <Clients />
              <div className="client__info">
                <h5 className="client__rate">+2.4K</h5>
                <h5 className="client__active">Active Clients</h5>
              </div>
            </div>
            <Typo />
          </div>
          <div className="hero__img">
            <img src={heroImage} alt="service one" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
