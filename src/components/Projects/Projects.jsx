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
          gitHubLink={"https://github.com/AndrewKostiv/Airsoft-Tools"}
          link={"https://airsoft-tools.vercel.app"}
          img={"./public/Airsoft Tools Image.png"}
        />
      </div>
    </div>
  );
}

export function Project({ projectName, description, gitHubLink, link, img }) {
  return (
    <a href={link} target="_black" className={style.Project}>
      <h3>{projectName}</h3>
      <p>{description}</p>
      <a className={style.gitHubLink} target="_blank" href={gitHubLink}>
        GitHub Link
      </a>
      <a className={style.projectLink} href={link} target="_blank">
        <p>Project Link:</p>
        <img src={img} alt={projectName} />
      </a>
    </a>
  );
}
