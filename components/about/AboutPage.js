import CommonDropdown from "@/pages/CommonDropdown";
import Dropdown from "@/pages/Dropdown";
import { ArrowRightAltRounded, KeyboardBackspace } from "@mui/icons-material";
import React from "react";

const AboutPage = () => {
  return (
    <div className="About">
      <CommonDropdown title="About Us-" path="About" />
      <div className="about-container">
        <div className="about-header">
          <h1>About</h1>
          <span>
            Home
            <ArrowRightAltRounded />
            About
          </span>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
