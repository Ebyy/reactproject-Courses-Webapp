import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const activeIndicator = { color: "black" };
  return (
    <nav>
      <NavLink activeStyle={activeIndicator} exact to="/">
        Home
      </NavLink>
      {" | "}
      <NavLink activeStyle={activeIndicator} to="/about">
        About
      </NavLink>
      {" | "}
      <NavLink activeStyle={activeIndicator} to="/courses">
        Courses
      </NavLink>
    </nav>
  );
}

export default Header;
