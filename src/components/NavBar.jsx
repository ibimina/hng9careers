import React, { useState } from "react";
import "./NavBar.css"
export default function NavBar() {
    const [openNav,setOpenNav]=useState(false)
  return (
    <header>
      <div className="logo">
        <img src="/assets/Frame 28084.svg" alt="weathery icon" />
      </div>

      <nav className={`header_nav ${openNav ? "show_nav" : ""}`}>
        <ul className="header_ul">
          <li className="header_link">
            {" "}
            <img
              src="/assets/home-line.svg"
              alt="login icon"
              className="nav_icon"
            />{" "}
            <span>Home</span>{" "}
          </li>
          <li className="header_link">
            <img
              src="/assets/updates.svg"
              alt="login icon"
              className="nav_icon"
            />{" "}
            <span>Features</span>
          </li>
          <li className="header_link">
            <img
              src="/assets/check.svg"
              alt="login icon"
              className="nav_icon"
            />{" "}
            <span> For Business</span>
          </li>
          <li className="header_link">
            <img
              src="/assets/circle.svg"
              alt="login icon"
              className="nav_icon"
            />{" "}
            <span>News</span>
          </li>
          <li className="header_link">
            <img
              src="/assets/survey.svg"
              alt="login icon"
              className="nav_icon"
            />
            <span>About Us</span>
          </li>
        </ul>
        <input
          type="text"
          placeholder="Search for city"
          className="search_location"
        />
        <div className="search career_btn">
          <img
            src="/assets/material-symbols_login.svg"
            alt="login icon"
            className="nav_icon"
          />{" "}
          <span> Sign up</span>
        </div>
      </nav>

      <button
        className={`mobile_navigation ${openNav ? "close" : ""}`}
        aria-label={`open nav close nav`}
        aria-expanded={openNav}
        onClick={() => (openNav ? setOpenNav(false) : setOpenNav(true))}
      ></button>
    </header>
  );
}
