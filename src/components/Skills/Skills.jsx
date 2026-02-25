import React from "react";
import style from "./Skills.module.css";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

const skills = [
  {
    name: "React",
    icon: <FaReact color="#61DBFB" size={"40px"} />,
  },
  {
    name: "JavaScript",
    icon: <IoLogoJavascript color="#F0DB4F" size={"40px"} />,
  },
];

export default function Skills() {
  return (
    <div className={style.Skills}>
      <h2>Tools and Technologies</h2>
      <div>
        {skills.map((skill) => (
          <Skill key={skill.name} skillName={skill.name} icon={skill.icon} />
        ))}
      </div>
    </div>
  );
}

export function Skill({ skillName, icon }) {
  return (
    <div className={style.Skill}>
      <h3>{skillName}</h3>
      {icon}
    </div>
  );
}
