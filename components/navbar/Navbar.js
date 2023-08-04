import React, { useState } from "react";
import  Button  from "./Button";
import  Link  from "next/link";

import Dropdown from "./Dropdown";
import { Facebook, GitHub } from "@material-ui/icons";
import { Google, Instagram } from "@mui/icons-material";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  const [option, setOption] = useState();
  return (
    <>
      <nav className="navbar">
        <Link href="/" className="navbar-logo" onClick={closeMobileMenu}>
          Artrium
          <span style={{ color: "var(--secondary-color)" }}>.</span>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link href="/" className="nav-links active" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              href="/features"
              className="nav-links"
              onClick={() => {
                closeMobileMenu();
              }}
              // onMouseOver={() => setOption("features")}
              // onMouseLeave={() => setOption("")}
            >
              FEATURES <i className="fas fa-caret-down" />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className="nav-item">
            <Link href="/Portfolio" className="nav-links" onClick={closeMobileMenu}>
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/About" className="nav-links" onClick={closeMobileMenu}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/Blog" className="nav-links" onClick={closeMobileMenu}>
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/Contact" className="nav-links" onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>
          {click && (
            <div className="nav-icons">
              <Facebook />
              <GitHub />
              <Google />
              <Instagram />
            </div>
          )}
        </ul>
        {/* <Button /> */}
      </nav>
    </>
  );
}

export default Navbar;
