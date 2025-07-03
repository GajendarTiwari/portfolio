"use client";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { IconType } from "react-icons";
import {
  SiJavascript,
  SiPython,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiGit,
  SiPostman,
  SiFastapi,
  SiFigma,
  SiMysql,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiTableau,
  SiDocker,
  SiJupyter,
  SiKubernetes,
  SiDatabricks,
  SiTerraform,
  SiReact,
  SiNextdotjs,
} from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { FaDatabase, FaRobot, FaAws } from "react-icons/fa";
import { MdAnalytics } from "react-icons/md";
import { GiArtificialIntelligence } from "react-icons/gi";
import { FaMicrosoft } from "react-icons/fa6";

type SkillType = {
  name: string;
  icon?: IconType;
  imgSrc?: string;
  color?: string;
};

const skills: SkillType[] = [
  // Tech stacks with official icons
  { name: "HTML", icon: SiHtml5, color: "text-[#E34F26]" },
  { name: "CSS", icon: SiCss3, color: "text-[#1572B6]" },
  { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
  { name: "Python", icon: SiPython, color: "text-yellow-500" },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-[#06B6D4]" },
  { name: "React", icon: SiReact, color: "text-blue-400" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "Postman", icon: SiPostman, color: "text-[#FF6C37]" },
  { name: "Git", icon: SiGit, color: "text-[#F1502F]" },
  { name: "Figma", icon: SiFigma, color: "text-[#F24E1E]" },
  { name: "FastAPI", icon: SiFastapi, color: "text-[#009688]" },
  { name: "MySQL", icon: SiMysql, color: "text-[#4479A1]" },
  { name: "Pandas", icon: SiPandas, color: "text-purple-700" },
  { name: "NumPy", icon: SiNumpy, color: "text-blue-700" },
  { name: "Scikit-learn", icon: SiScikitlearn, color: "text-orange-400" },
  { name: "Jupyter", icon: SiJupyter, color: "text-orange-500" },
  { name: "Docker", icon: SiDocker, color: "text-blue-500" },
  { name: "Kubernetes", icon: SiKubernetes, color: "text-blue-600" },
  { name: "Databricks", icon: SiDatabricks, color: "text-red-600" },
  { name: "Terraform", icon: SiTerraform, color: "text-purple-700" },
  { name: "Tableau", icon: SiTableau, color: "text-blue-800" },
  { name: "REST API", icon: TbSql, color: "text-blue-600" },
  { name: "Azure", icon: FaMicrosoft, color: "text-blue-700" },
  { name: "AWS", icon: FaAws, color: "text-yellow-400" },
  { name: "SciPy", imgSrc: "/icons/scipy.svg" },
  { name: "Seaborn", icon: MdAnalytics, color: "text-purple-400" },



  // Custom SVG-based icons
  { name: "Plotly Express", imgSrc: "/icons/plotly.svg" },
  { name: "Power BI", imgSrc: "/icons/icons8-power-bi-2021-50.svg" },
  { name: "Google Colab", imgSrc: "/icons/googlecolab.svg" },
  { name: "OBS Studio", imgSrc: "/icons/obsstudio.svg" },
  { name: "OpenAI Whisper", imgSrc: "/icons/openai.svg" },
  { name: "Selenium", imgSrc: "/icons/selenium.svg" },


  // GenAI tools
  { name: "Gemini", imgSrc: "/icons/icons8-gemini.svg" },
  { name: "Hugging Face", imgSrc: "/icons/huggingface.svg" },
  { name: "OpenAI", imgSrc: "/icons/openai.svg" },
  { name: "CrewAI", imgSrc: "/icons/crewai.svg" },

  // Backend/Infra
  { name: "SQLAlchemy", icon: FaDatabase, color: "text-green-700" },
  { name: "Render", imgSrc: "/icons/render.svg" },
  { name: "Vercel", icon: SiNextdotjs, color: "text-black" },
];

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<SkillType | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="py-20 bg-white dark:bg-black relative overflow-hidden" id="skills">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
          My Skills
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
          Technologies & tools I work with
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-6 mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 dark:text-white">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="relative flex flex-col items-center justify-center bg-neutral-50 dark:bg-neutral-900 rounded-xl shadow-md p-5 transition-all duration-300 hover:shadow-xl cursor-pointer"
            onMouseEnter={() => setHoveredSkill(skill)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            {skill.icon ? (
              <skill.icon className={`text-4xl ${skill.color || "text-white"}`} />
            ) : (
              <Image
                src={skill.imgSrc || ""}
                alt={skill.name}
                width={40}
                height={40}
              />
            )}
            <Badge variant="secondary" className="mt-3 px-3 py-1 text-sm whitespace-nowrap">
              {skill.name}
            </Badge>
          </motion.div>
        ))}
      </div>

      {hoveredSkill && (
        <motion.div
          className="fixed pointer-events-none z-50"
          style={{
            left: cursorPos.x + 10,
            top: cursorPos.y + 10,
          }}
          animate={{
            scale: [0.9, 1.1, 0.9],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {hoveredSkill.icon ? (
            <hoveredSkill.icon className={`text-4xl ${hoveredSkill.color || "text-white"}`} />
          ) : (
            <Image
              src={hoveredSkill.imgSrc || ""}
              alt={hoveredSkill.name}
              width={40}
              height={40}
            />
          )}
        </motion.div>
      )}
    </section>
  );
};

export default Skills;
