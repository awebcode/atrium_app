import Image from "next/image";

const data = [
  {
    icon: "/icon/coding.png",
    head: "POWERFUL ADMIN PANEL",
    foot: "Use our powerful admin system to manage your tasks.",
  },
  {
    icon: "/icon/usd.png",
    head: "PROGRAMMING & DEVELOPMENT",
    foot: "Skilled developers can help you build a professional website.",
  },
  {
    icon: "/icon/nodes.png",
    head: "TOUCH & RETINA OPTIMIZATION",
    foot: "See how the details truly stand out in comparison to other designs.",
  },
  {
    icon: "/icon/tea.png",
    head: "PIXEL PERFECT DESIGN",
    foot: "We take pride in creative design that is never lost in translation.",
  },
];

const Services = () => {
  return (
    <div className="home-services">
      <div className="home-container">
        <div className="home-services-container">
          {data.map((v, i) => {
            return (
              <div className="home-services-card" key={i}>
                <div className="img">
                  <Image
                    src={v.icon}
                    alt=""
                    height={1000}
                    width={1000}
                    
                  />
                </div>
                <h2>{v.head}</h2>
                <h3>{v.foot}</h3>
              </div>
            );
          })}
        </div>
      </div>
      <div className="block-2">
        <div className="block-2-container">
          {" "}
          <div className="block-2-content">
            <h2>ABOUT US</h2>
            <h1>
              INSPIRATION HAS
              <br />
              NO BORDERS
            </h1>
            <p>
              At our creative agency we make emphasis on comfortable conditions for
              creative minds that form groups of talented people for branding.
            </p>
            <button>More About Us</button>
          </div>
        </div>
        <div className="img">
          <img src="/icon/planet.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Services;