import React from "react";
import NavBar from "../components/NavBar";
import style from "../styles/HomePage.module.css";
import Main from "../components/Main";

export default function HomePage() {
  return (
    <Main>
      <NavBar />
      <div className={style.HomePage}>
        <h1>Andrew Kostiv</h1>
        <p>Front end software engineer</p>
        <p>Syracuse NY / Binghamton NY</p>
      </div>
    </Main>
  );
}
