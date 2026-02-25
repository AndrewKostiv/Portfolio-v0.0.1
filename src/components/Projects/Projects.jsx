import React from "react";
import style from "./Projects.module.css";
export default function Projects() {
  return (
    <div className={style.Projects}>
      <h2>Projects</h2>
      <div>
        <Project
          projectName={"Airsoft Tools"}
          description={"Generates random teams from a list of players"}
          link={"https://github.com/AndrewKostiv/Airsoft"}
        />
      </div>
    </div>
  );
}

export function Project({ projectName, description, link }) {
  return (
    <a href={link} target="_black" className={style.Project}>
      <h3>{projectName}</h3>
      <p>{description}</p>
    </a>
  );
}
