import React from 'react'

const Team = () => {
  return (
    <div className="team">
      <div className="team-left">
        <div className="img-1" >
          <img src="/team-1.jpg" alt=""  />
        </div>
        <div className="img-2">
          <img src="/team2.jpg" alt="" />
        </div>
      </div>
      <div className="team-right">
        <h2>WHO WE ARE</h2>
        <h1>WE'RE A TEAM OF TALENTED DEVELOPERS & DESIGNERS</h1>
        <p>
          In addition to all the branding and marketing features and benefits, our clients
          get to enjoy the advantages of a time-tested and refined workflow that is
          custom-tailored to each project!
        </p>
        <div className="team-right-inner">
          <div>
            <div className="img-1">
              <img src="/icon/crypto.png" alt="" />
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
}

export default Team