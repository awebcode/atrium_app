import CommonDropdown from "@/pages/CommonDropdown";
import Dropdown from "@/pages/Dropdown";
import { ArrowRightAltRounded, KeyboardBackspace } from "@mui/icons-material";
import React from "react";

const FeaturesPage = () => {
  return (
    <div className="Features">
      <CommonDropdown title="Features" path="Features" />
      <div className="Features-container">
        <div className="Features-header">
          <h1>OUR Features</h1>
          <span>
            Home
            <ArrowRightAltRounded />
          Features
          </span>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;
