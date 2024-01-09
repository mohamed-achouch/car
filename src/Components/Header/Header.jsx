import React, { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import "./header.css";
const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="head">
      <ul className="menu_desktop">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/#service">Services</a>
        </li>
        <li>
          <a href="/#castomers">Coustomer Feedback</a>
        </li>
      </ul>
      <div className="logo">
        <h1>CAR</h1>
        <h2>DEALERSHIP</h2>
      </div>
      <ul className="menu_desktop">
        <li>
          <a href="/#blog">Blogs</a>
        </li>
        <li>
          <a href="/#brand">Brands</a>
        </li>
        <li>
          <a href="/#modles">Modles</a>
        </li>
      </ul>
      <CgMenuRight className="btn_menu" onClick={() => setOpen(!open)}/>
      {
        open ? <ul className="menu_mobile">
          <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
        </ul> : null
      }
    </div>
  );
};

export default Header;
