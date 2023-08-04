// Dropdown.js
import Common from "@/components/Common";
import { ArrowRight } from "@material-ui/icons";
import { ArrowRightAltOutlined, Close, Menu } from "@mui/icons-material";
import Link from "next/link";
import React, { useState } from "react";

const CommonDropdown = (props) => {
  const [toggle, setToggle] = useState();
    return (
      <>
        <div className="head-main">
          <header className="header_x xx">
            <a href="#" className="logo x2">
              Artrium<span style={{ color: "var(--secondary-color)" }}>.</span>
            </a>
            <input type="checkbox" id="menu-bar" />
            <label htmlFor="menu-bar" onClick={() => setToggle(!toggle)}>
              {toggle ? <Close className="x2"/> : <Menu className="x2" />}
            </label>
            <nav className="nav_x xx-2">
              <ul>
                <li>
                  {" "}
                  <Link className="active active-2" href="/">
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
                  <Link href="/About">About</Link>
                  <ul>
                    <li>
                      <a href="#">Our Mission</a>
                    </li>
                    <li>
                      <a href="#">Our History</a>
                    </li>
                    <li>
                      <a href="#">Our Services</a>
                    </li>
                    <li>
                      <a href="#">Our Team</a>
                    </li>
                  </ul>
                </li>
                <li>
                  {" "}
                  <a href="/Blog">Blogs</a>
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
          <div className="common-title">
            <h1>{props.title}</h1>
            <span>
              Home <ArrowRightAltOutlined />
              {props.path}
            </span>
          </div>
        </div>
      </>
    );
};

export default CommonDropdown;
