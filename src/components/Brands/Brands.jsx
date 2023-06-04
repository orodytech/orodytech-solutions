import React from "react";
import "./brands.css";
import { FaReact, FaLaravel, FaFigma } from "react-icons/fa";
import { SiAdobe, SiVisualstudiocode } from "react-icons/si";

function Brands() {
  return (
    <div className="section__area">
      <div className="brands">
        <FaReact className="brand__icon react__icon" />
        <SiAdobe className="brand__icon adobe__icon" />
        <SiVisualstudiocode className="brand__icon vstudio__icon" />
        <FaLaravel className="brand__icon laravel__icon" />
        <FaFigma className="brand__icon figma__icon" />
      </div>
    </div>
  );
}

export default Brands;
