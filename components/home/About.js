import React from "react";
import { DashboardOutlined } from "@mui/icons-material";
import Image from "next/image";
const data = [
  {
    icon: "/icon/coding.png",
    head: "POWERFUL ADMIN PANEL",
    foot: "Use our powerful admin system to manage your tasks.",
  },
  {
    icon: "/icon/crypto.png",
    head: "PROGRAMMING & DEVELOPMENT",
    foot: "Skilled developers can help you build a professional website.",
  },
  {
    icon: "/icon/atom.png",
    head: "TOUCH & RETINA OPTIMIZATION",
    foot: "See how the details truly stand out in comparison to other designs.",
  },
  {
    icon: "/icon/app.png",
    head: "PIXEL PERFECT DESIGN",
    foot: "We take pride in creative design that is never lost in translation.",
  },
];
const About = () => {
  return (
    <div  id="about">
      <div className="about">
        <div className="about-left">
          <h2>ABOUT US</h2>
          <h1>CREATIVE WEB <br/> DESIGN SERVICES</h1>
          <p>
            In addition to all the branding and marketing features and benefits, our
            clients get to enjoy the advantages of a time-tested and refined workflow that
            is custom-tailored to each project!
          </p>
          <button>Our Portfolio</button>
        </div>
        <div className="about-right">
          {data.map((v, i) => {
            return (
              <div className="about-right-card" key={i}>
                <div className="img">
                  <Image src={v.icon} alt="image" height={100} width={50} layout="responsive" />
                </div>
                <h1>{v.head}</h1>
                <h3>{v.foot}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
