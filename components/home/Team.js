import Image from 'next/image';
import React from 'react'

const Team = () => {
  return (
    <div className="team">
      <div className="team-left">
        <div className="img-1">
          <Image src="/team1.jpg" alt="xx" height={300} width={400} />
        </div>
        <div className="img-2">
          <Image src="/team2.jpg" alt="xx" height={300} width={340} />
        </div>
      </div>
      <div className="team-right">
        <h2>WHO WE ARE</h2>
        <h1>WE&apos;RE A TEAM OF TALENTED DEVELOPERS & DESIGNERS</h1>
        <p>
          In addition to all the branding and marketing features and benefits, our clients
          get to enjoy the advantages of a time-tested and refined workflow that is custom
          tailored to each project!
        </p>
        <div className="team-right-inner">
          <div>
            <div className="img-1">
              <Image src="/icon/crypto.png" alt="" height={100} width={80} layout='responsive' />
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