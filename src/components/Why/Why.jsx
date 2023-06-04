import React from "react";
import { GiStopwatch, GiHighShot } from "react-icons/gi";
import { AiOutlineWechat } from "react-icons/ai";
import { RiCustomerService2Fill } from "react-icons/ri";
import "./why.css";

function Why() {
  return (
    <div>
      <div className="section__area">
        <h1 className="section__title">
          <span>Why</span> Choose us
        </h1>
        <div className="why__area">
          <div className="why__section">
            <div className="why__content">
              <div className="why__img">
                <div>
                  <GiStopwatch className="why__icon" />
                </div>
              </div>
              <div className="why__title">
                {" "}
                <p>Quick Turn-around</p>{" "}
              </div>
            </div>
          </div>
          <div className="why__section">
            <div className="why__content">
              <div className="why__img">
                <div>
                  <GiHighShot className="why__icon" />
                </div>
              </div>
              <div className="why__title">
                {" "}
                <p>Quality job</p>{" "}
              </div>
            </div>
          </div>
          <div className="why__section">
            <div className="why__content">
              <div className="why__img">
                <div>
                  <AiOutlineWechat className="why__icon" />
                </div>
              </div>
              <div className="why__title">
                {" "}
                <p>Easy Communication</p>{" "}
              </div>
            </div>
          </div>
          <div className="why__section">
            <div className="why__content">
              <div className="why__img">
                <div>
                  <RiCustomerService2Fill className="why__icon" />
                </div>
              </div>
              <div className="why__title">
                {" "}
                <p>customer friendly</p>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Why;
