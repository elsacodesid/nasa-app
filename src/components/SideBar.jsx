import React from "react";

const SideBar = ({handleToggleModal}) => {
  return (
    <div className="sidebar">
      <div  onClick={handleToggleModal} className="bgOverlay"></div>
      <div className="sidebarContents">
        <h2>Futuristic Rice Field</h2>
        <div>
         <p>Description</p> 
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
            minus, corrupti dolores laborum fuga dolor.
          </p>
        </div>
        <button onClick={handleToggleModal}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default SideBar;
