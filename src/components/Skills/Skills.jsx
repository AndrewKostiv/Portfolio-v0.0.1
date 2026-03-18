import React from "react";
import style from "./Skills.module.css";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import SmallCard from "../Utils/SmallCard/SmallCard";
import BigCard from "../Utils/BigCard/BigCard";

const skills = [
  {
    name: "React",
    icon: <FaReact color="#61DBFB" size={"40px"} />,
  },
  {
    name: "JavaScript",
    icon: <IoLogoJavascript color="#F0DB4F" size={"40px"} />,
  },
  {
    name: "Vercel",
    icon: (
      <img
        src="./public/vercel_icon.png"
        alt="vercel"
        style={{ size: "0px" }}
      />
    ),
  },
];

export default function Skills() {
  return (
    <BigCard>
      <div className={style.Skills}>
        <h2>Tools and Technologies</h2>
        <div>
          {skills.map((skill) => (
            <Skill key={skill.name} skillName={skill.name} icon={skill.icon} />
          ))}
        </div>
      </div>
    </BigCard>
  );
}

export function Skill({ skillName, icon }) {
  return (
    <SmallCard>
      <div className={style.skill}>
        <h3>{skillName}</h3>
        {icon}
      </div>
    </SmallCard>
  );
}
