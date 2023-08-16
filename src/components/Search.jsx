import React from "react";
import logo from "../images/Marshalls-Logo.svg";
import { PiMagnifyingGlassThin } from "react-icons/pi";

const Search = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="content">
          <div className="logo col">
            <img src={logo} alt="Marshall Logo" />
          </div>
          <div className="search-bar col">
            <input type="text" placeholder="search" />
            <PiMagnifyingGlassThin />
          </div>
        </div>
        <div className="dropdown-menu">
          <ul>
            <li>
              <a href="#">NEW ARRIVALS</a>
            </li>
            <li>
              <a href="#">FALL FASHION</a>
            </li>
            <li>
              <a href="#">WOMEN</a>
            </li>
            <li>
              <a href="#">SHOES</a>
            </li>
            <li>
              <a href="#">MEN</a>
            </li>
            <li>
              <a href="#">BEAUTY & ACCESSORIES</a>
            </li>
            <li>
              <a href="#">KIDS & BABY</a>
            </li>
            <li>
              <a href="#">HOME</a>
            </li>
            <li>
              <a href="#">GIFTS</a>
            </li>
            <li>
              <a href="#">CLEARANCE</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Search;
