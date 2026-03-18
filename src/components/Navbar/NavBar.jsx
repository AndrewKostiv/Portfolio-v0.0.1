import React from "react";
import { NavLink } from "react-router";
import style from "./NavBar.module.css";

export default function NavBar() {
  return (
    <nav className={style.navBar}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/About">About</NavLink>
      <NavLink to="/Contact">Contact</NavLink>
    </nav>
  );
}
