import HaveAproject from "@/components/home/HaveAproject";
import HomeFooter from "@/components/home/HomeFooter";
import Team from "@/components/home/Team";
import CommonDropdown from "@/pages/CommonDropdown";
import Dropdown from "@/pages/Dropdown";
import { ArrowRightAltRounded, KeyboardBackspace } from "@mui/icons-material";
import React from "react";
import Progress from "./Progress";
import Services from "@/components/home/services";

import BrandingDesignAgency from "./Brand";
import TestimonialSlider from "./Slider";



const OurMission = () => {
  return (
    <div className="OurMission">
      <CommonDropdown title="Our Mission" path="Our Mission" />
      <Progress/>
      <div className="OurMission-container">
       
      </div>
      <Services />
      <TestimonialSlider />
      <BrandingDesignAgency/>
      <HaveAproject/>
      <HomeFooter/>
    </div>
  );
};

export default OurMission;
