import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import "./Error.css";

function Error() {
  return (
    <>
      <div className="error">
        <h1 className="error__page">404 Not found</h1>
        <p className="error__emoji">
          <span role="img" aria-label="sad">
            😢
          </span>
        </p>

        <div className="back__home">
          <div>
            <FaHome />
          </div>
          <div className="back__text">
            <Link to="/">Go Back Home</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Error;
