import React from "react";
import "./modal.css";

function Modal({ open, onClose }) {
  if (!open) return null;
  return (
    <>
      <div onClick={onClose} className="overlay" />
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modalContainer"
      >
        <div className="modalContent">
          <div>
            <h5 onClick={onClose} className="closeBtn">
              x
            </h5>
          </div>
          <div className="content">
            <h2>Feel Free to reach out to us</h2>
            <div className="content__item">
              <p>Full Name:</p>
              <input type="text" placeholder="Name" />
            </div>
            <div className="content__item">
              <p>Email:</p>
              <input type="email" placeholder="Your Email" />
            </div>
            <div className="content__item">
              <p>Subject:</p>
              <input type="text" placeholder="Subject" />
            </div>
            <div className="content__item">
              <p>Message:</p>
              <input type="text-area" placeholder="Write your message...." />
            </div>
            <button className="btn__submit">Submit</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
