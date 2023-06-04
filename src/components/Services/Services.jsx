import React from "react";
import { BsArrowDownCircleFill } from "react-icons/bs";
import "./services.css";
import Services1 from "../../assets/services/service1.jpg";
import Services2 from "../../assets/services/service2.jpg";
import Services3 from "../../assets/services/service3.jpg";
import Services4 from "../../assets/services/service4.jpg";
import { BsArrowRight } from "react-icons/bs";
import Button from "../Shared/Button";
function Services() {
  return (
    <>
      <div className="section__area">
        <div className="section__title">
          Our <span>Services</span>
        </div>
        <div className="services__section">
          <div className="services__item">
            <img className="services__img" src={Services1} alt="" />
            <div className="services__content">
              <h3 className="services__heading">Web development</h3>
              <p className="services__description">
                We have experience in building custom websites, e-commerce
                platforms, and web applications, our team of experts can help
                you create a website that meets your needs and exceeds your
                expectations...
              </p>
              <div className="sections__button">
                <Button version="tertiary__small">
                  Read More <BsArrowDownCircleFill />
                </Button>
              </div>
            </div>
          </div>
          <div className="services__item">
            <img className="services__img" src={Services2} alt="" />
            <div className="services__content">
              <h3 className="services__heading">It consultancy</h3>
              <p className="services__description">
                We have experience in building custom websites, e-commerce
                platforms, and web applications, our team of experts can help
                you create a website that meets your needs and exceeds your
                expectations...
              </p>
              <div className="sections__button">
                <Button version="tertiary__small">
                  Read More <BsArrowDownCircleFill />
                </Button>
              </div>
            </div>
          </div>
          <div className="services__item">
            <img className="services__img" src={Services3} alt="" />
            <div className="services__content">
              <h3 className="services__heading">Graphic design</h3>
              <p className="services__description">
                We provide a comprehensive range of graphic design services,
                such as branding, marketing material design, and logo
                creation...
              </p>
              <div className="sections__button">
                <Button version="tertiary__small">
                  Read More <BsArrowDownCircleFill />
                </Button>
              </div>
            </div>
          </div>
          <div className="services__item">
            <img className="services__img" src={Services4} alt="" />
            <div className="services__content">
              <h3 className="services__heading">ui/ux</h3>
              <p className="services__description">
                Our team of specialists can assist you in developing engaging
                and understandable user interfaces that enhance the user
                experience as a whole since we use a user-centered approach to
                design...
              </p>
              <div className="sections__button">
                <Button version="tertiary__small">
                  Read More <BsArrowDownCircleFill />
                </Button>
              </div>
            </div>
          </div>
          <div className="services__item">
            <img className="services__img" src={Services4} alt="" />
            <div className="services__content">
              <h3 className="services__heading">data science</h3>
              <p className="services__description">
                To assist you in making data-driven decisions, we provide a
                variety of data science services, such as developing machine
                learning models, data visualization, and big data analysis...
              </p>
              <div className="sections__button">
                <Button version="tertiary__small">
                  Read More <BsArrowDownCircleFill />
                </Button>
              </div>
            </div>
          </div>
          <div className="services__item">
            <img className="services__img" src={Services4} alt="" />
            <div className="services__content">
              <h3 className="services__heading">Videography</h3>
              <p className="services__description">
                Our team of professionals can assist you in producing
                eye-catching visual material, from commercials to corporate
                films, that conveys your narrative and makes you stand out in
                the competitive digital environment of today...
              </p>
              <div className="sections__button">
                <Button version="tertiary__small">
                  Read More <BsArrowDownCircleFill />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
