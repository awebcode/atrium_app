import Image from "next/image";
import React from "react";

const HomeHistory = () => {
  return (
    <div className="team">
      <div className="team-left">
        <div className="img-1">
          <Image src="/projects/5.jpg" alt="xx" height={300} width={400} />
        </div>
        <div className="img-2">
          <Image src="/projects/2.jpg" alt="xx" height={300} width={340} />
        </div>
      </div>
      <div className="team-right">
        <h2>WHO WE ARE</h2>
        <h1>THE ARTRIUM BUSINESS & AGENCY HISTORY</h1>
        <div className="buttons">
          <button>1968</button>
          <button>1974</button>
          <button>1979</button>
          <button>1985</button>
          <button>1990</button>
        </div>
        <p>
          Duis efficitur tincidunt dapibus. Phasellus imperdiet odio eget nisl tempus
          pharetra. Aenean arcu magna, cursus vitae. fermentum acse mper eget est.
          Suspendisse eu mauris turpis diet odio eget nisl tempus. Lorem ipsum dolor sit
          amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua.
        </p>
        <div className="team-right-inner">
          <div>
            <div className="img-1">
              <Image
                src="/icon/usd.png"
                alt=""
                height={100}
                width={80}
                layout="responsive"
              />
            </div>
          </div>
          <div>
            <h1>THE BEST DIGITAL AGENCY</h1>
            <p>
              In addition to all the branding and marketing features and benefits, our
              clients get to enjoy the advantages of a time-tested and refined workflow
              that is custom-tailored to each project!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHistory;
