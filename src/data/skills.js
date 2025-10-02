// src/data/skills.js
import {
    FaBootstrap,
    FaCss3Alt,
    FaDatabase,
    FaHtml5,
    FaJs,
    FaNode,
    FaPython,
    FaReact
} from "react-icons/fa";
import { SiCplusplus, SiJquery, SiMongodb, SiTailwindcss } from "react-icons/si";

const skillsData = [
    { name: "HTML", icon: FaHtml5 },
    { name: "CSS", icon: FaCss3Alt },
    { name: "JavaScript", icon: FaJs },
    { name: "ReactJS", icon: FaReact },
    { name: "Node.js", icon: FaNode },
    { name: "Python", icon: FaPython },
    { name: "Bootstrap", icon: FaBootstrap },
    { name: "TailwindCSS", icon: SiTailwindcss },
    { name: "jQuery", icon: SiJquery },
    { name: "MongoDB", icon: SiMongodb },
    { name: "C++", icon: SiCplusplus },
    { name: "Database", icon: FaDatabase },
];

export default skillsData;
