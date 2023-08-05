import HaveAproject from "@/components/home/HaveAproject";
import HomeFooter from "@/components/home/HomeFooter";
import CommonDropdown from "@/pages/CommonDropdown";
import Dropdown from "@/pages/Dropdown";
import { ArrowRightAltRounded, KeyboardBackspace } from "@mui/icons-material";
import React from "react";

const OurHistory = () => {
  return (
    <div className="OurHistory">
      <CommonDropdown title="Our History" path="Our History" />
      <div className="OurHistory-container">
        <div className="OurHistory-header">

        </div>
      </div>
      <HaveAproject/>
      <HomeFooter/>
    </div>
  );
};

export default OurHistory;
