import HaveAproject from "@/components/home/HaveAproject";
import HomeFooter from "@/components/home/HomeFooter";
import CommonDropdown from "@/pages/CommonDropdown";
import Dropdown from "@/pages/Dropdown";
import { ArrowRightAltRounded, KeyboardBackspace } from "@mui/icons-material";
import React from "react";
import HomeHistory from "./Home";
import Team from "@/components/home/Team";
import Video from "./Video";
import Counter from "./Counter";
import FAQ from "./faq";


const OurHistory = () => {
  return (
    <div className="OurHistory">
      <CommonDropdown title="Our History" path="Our History" />
      <div className="OurHistory-container">
        <div className="OurHistory-header">

        </div>
      </div>
      <HomeHistory />
      <Video />
      <Counter />
      <FAQ/>
      <HaveAproject/>
      <HomeFooter/>
    </div>
  );
};

export default OurHistory;
