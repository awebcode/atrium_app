// Dropdown.js
import Common from "@/components/Common";
import { Close, Menu } from "@mui/icons-material";
import Link from "next/link";
import React, { useState } from "react";


const Dropdown = () => {
    const [toggle, setToggle] = useState();
  return (
    <header className="header_x">
      <a href="#" className="logo">
        Artrium<span style={{ color: "var(--secondary-color)" }}>.</span>
      </a>
      <input type="checkbox" id="menu-bar" />
      <label htmlFor="menu-bar" onClick={() => setToggle(!toggle)}>
        {toggle ? <Close /> : <Menu />}
      </label>
      <nav className="nav_x">
        <ul>
          <li>
            {" "}
            <Link className="active" href="/">
              Home
            </Link>
            <ul>
              <li>
                <a href="#">Home1</a>
              </li>
              <li>
                <a href="#">Home2</a>
              </li>
              <li>
                <a href="#">Home Boxed</a>
              </li>
            </ul>
          </li>
          <li>
            {" "}
            <Link href="/Feature">Features</Link>
            <ul>
              <li>
                <a href="#">Typography</a>
              </li>
              <li>
                <a href="#">Short Codes</a>
              </li>
              <li>
                <a href="#">Services Plus</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </li>
          <li>
            {" "}
            <Link href="/Portfolio">Portfolio</Link>
          </li>
          <li>
            {" "}
            <Link href="#">About</Link>
            <ul>
              <li>
                <Link href="/ourmission">Our Mission</Link>
              </li>
              <li>
                <Link href="/ourhistory">Our History</Link>
              </li>
              <li>
                <Link href="/ourservices">Our Services</Link>
              </li>
              <li>
                <Link href="/ourteam">Our Team</Link>
              </li>
            </ul>
          </li>
          <li>
            {" "}
            <Link href="/Blog">Blog</Link>
            <ul>
              <li>
                <a href="#">All Posts</a>
              </li>
              <li>
                <a href="#">Portfolio Style +</a>
                <ul>
                  <li>
                    <a href="#">3 Styles</a>
                  </li>
                  <li>
                    <a href="#">3 Styles</a>
                  </li>
                  <li>
                    <a href="#">3 Styles</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Cheese Style +</a>
                <ul>
                  <li>
                    <a href="#">2 Styles</a>
                  </li>
                  <li>
                    <a href="#">2 Styles</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            {" "}
            <Link href="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Dropdown;
