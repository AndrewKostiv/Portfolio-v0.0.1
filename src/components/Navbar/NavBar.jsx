import React from "react";
import { NavLink } from "react-router";
import HomePage from "../../pages/HomePage/HomePage.jsx";
import AboutPage from "../../pages/AboutPage/AboutPage.jsx";

export default function NavBar() {
  return (
    <nav>
      <NavLink index element={<HomePage />}>
        Home
      </NavLink>
      <NavLink to={"/about"} element={<AboutPage />}>
        About
      </NavLink>
    </nav>
  );
}
