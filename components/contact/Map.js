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

const Map = () => {
  return (
    <div className="home-services x2">
     
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
          <Image src="/icon/planet.png" alt="aa" height={100} width={100} layout="responsive"/>
        </div>
      </div>
    </div>
  );
};

export default Map;
