import React from "react";
import style from "./Projects.module.css";
import airsoftToolsImg from "/src/assets/airsoft-tools-image.png";
import SmallCard from "../Utils/SmallCard/SmallCard";

const projects = [
  {
    name: "Airsoft Tools",
    description: "Generates random teams from a list of players",
    gitHubLink: "https://github.com/AndrewKostiv/Airsoft-Tools",
    projectLink: "https://airsoft-tools.vercel.app",
    imgPath: airsoftToolsImg,
  },
];

export default function Projects() {
  return (
    <div className={style.Projects}>
      <h2>Projects</h2>
      <div>
        {projects.map((project) => (
          <Project
            key={project.name}
            projectName={project.name}
            description={project.description}
            gitHubLink={project.gitHubLink}
            projectLink={project.projectLink}
            imgPath={project.imgPath}
          />
        ))}
      </div>
    </div>
  );
}

export function Project({
  projectName,
  description,
  gitHubLink,
  projectLink,
  imgPath,
}) {
  return (
    <SmallCard>
      <div className={style.Project}>
        <h3>{projectName}</h3>
        <p>{description}</p>
        <a className={style.gitHubLink} target="_blank" href={gitHubLink}>
          GitHub Link
        </a>
        <a className={style.projectLink} href={projectLink} target="_blank">
          <p>Project Link:</p>
          <img src={imgPath} alt={projectName} />
        </a>
      </div>
    </SmallCard>
  );
}
