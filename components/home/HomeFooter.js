import Link from "next/link";
import React from "react";

const HomeFooter = () => {
  return (
    <footer className="home-footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-contact">
            <p>
              <i className="fas fa-phone-alt"></i> Phone: +1 123-456-7890
            </p>
            <p>
              <i className="fas fa-envelope"></i> Email: info@example.com
            </p>
          </div>
          <p className="footer-company">Company Name</p>
        </div>
        <div className="footer-middle">
          <h1>DISCOVER</h1>
          <div className="footer-icons">
            <li>
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="#">About</Link>
            </li>
            <li>
              <Link href="#">Contacts</Link>
            </li>
            <li>
              <Link href="#">Features</Link>
            </li>
            <li>
              <Link href="#">Projects</Link>
            </li>
            <li>
              <Link href="#">our_company</Link>
            </li>
            <li>
              <Link href="#">Blogs</Link>
            </li>
          </div>
        </div>
        <div className="footer-middle">
          <h1>INFORMATION</h1>
          <div className="footer-icons">
            <li>
              <Link href="#">Services</Link>
            </li>
            <li>
              <Link href="#">Our Team</Link>
            </li>
            <li>
              <Link href="#">Price Item</Link>
            </li>
            <li>
              <Link href="#">Features</Link>
            </li>
            <li>
              <Link href="#">Short Codes</Link>
            </li>
            <li>
              <Link href="#">Typography</Link>
            </li>
           
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-newsletter">
            <h4>Newsletter</h4>
            <form>
              <input type="email" placeholder="Your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      <div className="footer-divider"></div>
      <div className="footer-copyright">
        <p>&copy; Asikur Rahman | All rights reserved</p>
        <div className="footer-middle">
          <div className="footer-icons">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default HomeFooter;
