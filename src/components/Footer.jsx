import React from "react";

const Footer = ({ showModal, handleToggleModal }) => {
  return (
    <footer>
      <div className="bgGradient"></div>
      <div>
        <h2>Futuristic rice field</h2>
        <h1>APOD PROJECT</h1>
      </div>
      <button onClick={handleToggleModal}>
        <i class="fa-solid fa-circle-info"></i>
      </button>
    </footer>
  );
};

export default Footer;
