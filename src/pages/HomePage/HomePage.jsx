import React from "react";
import NavBar from "../../components/Navbar/NavBar";
import style from "./HomePage.module.css";
import Projects from "../../components/Projects/Projects";
import Skills from "../../components/Skills/Skills";

export default function HomePage() {
  return (
    <div className={style.main}>
      <NavBar />
      <div className={style.HomePage}>
        <h1>Andrew Kostiv</h1>
        <p>Front end software engineer</p>
        <p>Syracuse NY / Binghamton NY</p>
      </div>
      <Skills />
      <Projects />
      <br />
    </div>
  );
}
