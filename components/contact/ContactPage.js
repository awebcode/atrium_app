// ContactPage.js
import CommonDropdown from "@/pages/CommonDropdown";

import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import AddIcCallOutlinedIcon from "@mui/icons-material/AddIcCallOutlined";
import React from "react";
import HaveAproject from "../home/HaveAproject";
import HomeFooter from "../home/HomeFooter";
import Services from "../home/services";
import Map from "./Map";

const ContactPage = () => {
  return (
    <div className="contact">
      <CommonDropdown title="contact Us" path="contact" />
      <div className="contact-container">
        <div className="contact-card-container">
          <div className="contact-card">
            <FmdGoodOutlinedIcon />
            <h1>Location</h1>
            <p>82 12th Street, Office 14</p>
          </div>
          <div className="contact-card">
            <MailOutlineOutlinedIcon />
            <h1>Email</h1>
            <p>example@gmail.com</p>
          </div>
          <div className="contact-card">
            <AddIcCallOutlinedIcon />
            <h1>Phone</h1>
            <p>+79375933363</p>
          </div>
        </div>
      </div>
      <Map />
      <div className="contact-section">
        <p>TELL US MORE ABOUT YOUR PROJECT</p>
        <h2 className="contact-header">LET&apos;S WORK TOGETHER</h2>
        <div className="contact-form">
          <div className="contact-input-group">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
          </div>

          <div className="contact-input-group x2">
            <input type="text" placeholder="Message" />
          </div>
        </div>
        <button className="contact-submit-btn" type="submit">
          Send Your Message
        </button>
      </div>

      <HaveAproject />
      <HomeFooter />
    </div>
  );
};

export default ContactPage;
