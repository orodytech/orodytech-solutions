import React from "react";
import Typical from "react-typical";

function Typo() {
  return (
    <>
      <h4 className="typical__service">
        {" "}
        We're {""}
        <Typical
          className="typical__service"
          loop={Infinity}
          wrapper="b"
          steps={[
            "Web Developers.",
            1000,
            "Data Scientists.",
            1000,
            "Graphic Designers.",
            1000,
            "UI/UX Designers.",
            1000,
            "IT Consultants.",
            1000,
            "Videographers.",
            1000,
          ]}
        />
      </h4>
    </>
  );
}

export default Typo;
