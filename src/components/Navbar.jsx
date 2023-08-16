import React from "react";
// import tjmaxx from "../images/tjmaxx.svg";
// import marshalls from "../images/marshalls.svg";
// import homegoods from "../images/homegoods.svg";
// import sierra from "../images/sierra.svg";
// import homesense from "../images/homesense.svg";
import { VscLocation } from "react-icons/vsc";
import { BiUser } from "react-icons/bi";
import { RiVipDiamondLine } from "react-icons/ri";
import { BiHeart } from "react-icons/bi";
import { BsBag } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="navbar">
          <ul className="logo-links">
            <li>
              <a href="#">TJ-Maxx</a>
            </li>
            <li>
              <a href="#">Marshalls</a>
            </li>
            <li>
              <a href="#">HomeGoods</a>
            </li>
            <li>
              <a href="#">Sierra</a>
            </li>
            <li>
              <a href="#">HomeSense</a>
            </li>
          </ul>
          <ul className="nav-links">
            <li>
              <a href="#">
                Stores <VscLocation />
              </a>
            </li>
            <li>
              <a href="#">
                My Account <BiUser />{" "}
              </a>
            </li>
            <li>
              <a href="#">
                Rewards <RiVipDiamondLine />
              </a>
            </li>
            <li>
              <a href="#">
                Favorites <BiHeart />{" "}
              </a>
            </li>
            <li>
              <a href="#">
                My Bag <BsBag />{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
