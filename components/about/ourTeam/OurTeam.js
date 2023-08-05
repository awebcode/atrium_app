import HaveAproject from "@/components/home/HaveAproject";
import HomeFooter from "@/components/home/HomeFooter";
import CommonDropdown from "@/pages/CommonDropdown";
import Dropdown from "@/pages/Dropdown";
import { ArrowRightAltRounded, KeyboardBackspace } from "@mui/icons-material";
import React from "react";
import Home from "./Home";
import Contact from "./Contact";
import RightSide from "./RightImage";
import LeftSide from "./LeftImage";

const OurTeam = () => {
  return (
    <div className="OurTeam">
      <CommonDropdown title="Our Team" path="Our Team" />
      <div className="OurTeam-container">
        <div className="OurTeam-header">
         
        </div>
      </div>
      <Home />
      <RightSide />
      <LeftSide/>
      <Contact/>
      <HaveAproject />
      <HomeFooter />
    </div>
  );
};

export default OurTeam;
