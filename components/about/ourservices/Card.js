import Image from 'next/image';
import React from 'react'

const Card = () => {
  return (
    <div className='ourserv'>
      <div className="contact-card-containerx">
        <div className="contact-cardx">
          <Image src="/icon/nodes.png" height={50} width={50}  />
          <h1>Powerful Admin Pannel</h1>
          <p>
            With these CSS updates, the FAQ items will now smoothly transition when
            opening and closing
          </p>
        </div>
        <div className="contact-cardx">
          <Image src="/icon/coding.png" height={50} width={50}  />
          <h1>Design</h1>
          <p>
            With these CSS updates, the FAQ items will now smoothly transition when
            opening and closing
          </p>
        </div>
        <div className="contact-cardx">
          <Image src="/icon/planet.png" height={50} width={50}  />
          <h1>Search Optimization</h1>
          <p>
            With these CSS updates, the FAQ items will now smoothly transition when
            opening and closing
          </p>
        </div>
        <div className="contact-cardx">
          <Image src="/icon/tea.png" height={50} width={50}  />
          <h1>Creative Design</h1>
          <p>
            With these CSS updates, the FAQ items will now smoothly transition when
            opening and closing
          </p>
        </div>
        <div className="contact-cardx">
          <Image src="/icon/coding.png" height={50} width={50}  />
          <h1>Programming & Development</h1>
          <p>
            With these CSS updates, the FAQ items will now smoothly transition when
            opening and closing
          </p>
        </div>
        <div className="contact-cardx">
          <Image src="/icon/crypto.png" height={50} width={50}  />
          <h1>Pixel Perfect Design</h1>
          <p>
            With these CSS updates, the FAQ items will now smoothly transition when
            opening and closing
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card