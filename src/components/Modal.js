import React from "react";

const Modal = ({ show, onClose, title, description, url }) => {
  if (!show) return null;

  return (
    <>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <h2>{title}</h2>
        {url && <img src={url} alt={title} style={{ width: "100%" }} />}
        <p>{description}</p>
      </div>
    </>
  );
};

export default Modal;
