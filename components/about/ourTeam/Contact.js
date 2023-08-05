import React from 'react'

const Contact = () => {
  return (
    <div>
      {" "}
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
    </div>
  );
}

export default Contact