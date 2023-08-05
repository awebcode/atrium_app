import HaveAproject from "@/components/home/HaveAproject";
import HomeFooter from "@/components/home/HomeFooter";
import CommonDropdown from "@/pages/CommonDropdown";
import Dropdown from "@/pages/Dropdown";
import { ArrowRightAltRounded, KeyboardBackspace } from "@mui/icons-material";
import React from "react";

const OurTeam = () => {
  return (
    <div className="OurTeam">
      <CommonDropdown title="Our Team" path="Our Team" />
      <div className="OurTeam-container">
        <div className="OurTeam-header">
         
        </div>
      </div>
      <HaveAproject />
      <HomeFooter />
    </div>
  );
};

export default OurTeam;
