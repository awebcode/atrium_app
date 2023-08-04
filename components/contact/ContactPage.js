import CommonDropdown from "@/pages/CommonDropdown";
import Dropdown from "@/pages/Dropdown";
import { ArrowRightAltRounded, KeyboardBackspace } from "@mui/icons-material";
import React from "react";

const ContactPage = () => {
  return (
    <div className="contact">
      <CommonDropdown title="contact Us" path="contact" />
      <div className="contact-container">
        <div className="contact-header">
          <h1>Contact Us</h1>
          <span>
            Home
            <ArrowRightAltRounded />
          Contact Us
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
