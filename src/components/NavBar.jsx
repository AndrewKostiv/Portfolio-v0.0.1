import React from "react";
import { NavLink } from "react-router";
import style from "../styles/NavBar.module.css";

export default function NavBar() {
  return (
    <nav>
      <NavLink to="/">Home Page</NavLink>
      <NavLink to="/Page1">Page 1</NavLink>
    </nav>
  );
}
