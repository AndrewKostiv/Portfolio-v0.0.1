import React from "react";
import style from "./Projects.module.css";
export default function Projects() {
  return (
    <div className={style.Projects}>
      <h2>Projects</h2>
      <div>
        Projects have not been listed yet
        {/* <Project></Project>
        <Project></Project>
        <Project></Project> */}
      </div>
    </div>
  );
}

export function Project() {
  return (
    <div className={style.Project}>
      <h3>project1</h3>
      <p>description</p>
    </div>
  );
}
