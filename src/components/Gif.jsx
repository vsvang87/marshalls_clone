import React from "react";
import gif from "../images/site.gif";
const Gif = () => {
  return (
    <div className="gif-container">
      <div className="container">
        <div className="gif-content">
          <img src={gif} alt="GIF" />
          <div className="button-div">
            <button>SHOP WOMEN'S</button>
            <button>SHOP MEN'S</button>
            <button>SHOP KIDS & BABY</button>
            <button>SHOP WOMEN'S</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gif;
