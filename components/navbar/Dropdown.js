import React, { useState } from "react";


import  Link  from "next/link";
const MenuItems = [
  {
    title: "Typography",
    path: "/Typography",
    cName: "dropdown-link",
  },
  {
    title: "ShortCodes",
    path: "/ShortCodes",
    cName: "dropdown-link",
  },
  {
    title: "sevices plus",
    path: "/sevices plus",
    cName: "dropdown-link",
  },
  {
    title: "privacy-policy",
    path: "/privacy-policy",
    cName: "dropdown-link",
  },
];
function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link className={item.cName} href={item.path} onClick={() => setClick(false)}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;
