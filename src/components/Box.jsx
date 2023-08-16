import React from "react";
import newArrival from "../images/newarrivals.png";
import women from "../images/women.jpg";
import men from "../images/men.jpg";
import shoes from "../images/shoes.jpg";
import kids from "../images/kids.jpg";
import home from "../images/home.jpg";

const Box = () => {
  return (
    <div className="box-container">
      <div className="container">
        <div className="box-content">
          <a href="#" className="box">
            <img src={newArrival} alt="" />
          </a>
          <a href="#" className="box">
            <img src={women} alt="" />
          </a>
          <a href="#" className="box">
            <img src={men} alt="" />
          </a>
          <a href="#" className="box">
            <img src={shoes} alt="" />
          </a>
          <a href="#" className="box">
            <img src={kids} alt="" />
          </a>
          <a href="#" className="box">
            <img src={home} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Box;
