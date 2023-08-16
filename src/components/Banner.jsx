import React from "react";
import { FaChevronRight } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="gray-banner">
      <div className="container">
        <div className="banner-content">
          <p>
            Free Shipping On All Orders Of $89+ | Use Code | Free Returns At
            Your Local Store | See Details <FaChevronRight />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
