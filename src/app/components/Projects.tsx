"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiTypescript,
  SiExpress,
  SiExpo,
  SiShadcnui,
} from "react-icons/si";
import { LinkPreview } from "@/components/ui/link-preview";

const projects = [
  {
    title: "AI Meeting Assistant",
    description:
      "An end-to-end AI-powered assistant that joins Google Meet sessions, records meetings via OBS, transcribes with Whisper, summarizes using Gemini, extracts actionable tasks, and emails them to participants. Includes automated joining, recording, and smart task delegation with a clean modular structure.",
    image: "/assets/images/AImeet.png",
    tech: [
      { Icon: SiHtml5, color: "text-[#E34F26]" },
      { Icon: SiCss3, color: "text-blue-500" },
      { Icon: SiMongodb, color: "text-[#47A248]" },
      { imgPath: "/icons/openai.svg" },
      { imgPath: "/icons/crewai.svg" },
    ],
    link: "https://github.com/GajendarTiwari/ai-meeting-assistant",
    docs: "https://drive.google.com/file/d/1rB8g-SNVMfUOWLAu3W6YTQ1mAv2G3Trp/view?usp=drive_link",
  },
  {
    title: "UC AI SearchBot – Smart University Info Assistant",
    description:
      "A FastAPI-based AI chatbot that answers University of Cincinnati queries using Gemini LLMs and local ChromaDB search",
    image: "/assets/images/universitybot.png",
    tech: [
      { Icon: SiMongodb, color: "text-[#47A248]" },
      { Icon: SiExpress, color: "text-black dark:text-white" },
      { Icon: SiTailwindcss, color: "text-[#38BDF8]" },
      { imgPath: "/icons/openai.svg" },
      { imgPath: "/icons/crewai.svg" },
      { imgPath: "/icons/render.svg" },
    ],
    link: "https://github.com/GajendarTiwari/uc-ai-chatbot",
    docs: "https://drive.google.com/file/d/1trctGLcvIkDVnOVZ6jN9DtzdTM_tQ3LX/view?usp=drive_link",
  },
  {
    title: "Retail Analytics Dashboard – Kroger Data",
    description:
      "An interactive retail analytics dashboard built with Streamlit, offering customer insights, CLV prediction, churn analysis, and product recommendations using real-world 84.51°/Kroger data. The app includes cloud deployment, dynamic visualizations, and ML-based decision support",
    image: "/assets/images/retail.png",
    tech: [
      { Icon: SiNextdotjs, color: "text-black dark:text-white" },
      { Icon: SiTailwindcss, color: "text-[#38BDF8]" },
      { Icon: SiShadcnui, color: "text-black dark:text-white" },
      { Icon: SiMongodb, color: "text-[#47A248]" },
      { Icon: SiNodedotjs, color: "text-[#83CD29]" },
      { imgPath: "/icons/icons8-power-bi-2021-50.svg" },
      { imgPath: "/icons/render.svg" },
    ],
    link: "https://github.com/GajendarTiwari/retail-dashboard",
    docs: "https://drive.google.com/file/d/1DDiR7K4kGnsccAu7sclLlZKf3s91bd3S/view?usp=drive_link",
    live: "https://retail-dashboard-2qjzzbgwp869rolzl9ndod.streamlit.app/",
  },
  {
    title: "TaxBot Assistant – Gemini AI + LangChain",
    description:
      "An AI-powered chatbot that helps users choose between old and new tax regimes by answering queries using Gemini LLM and a vector database built from real government PDFs.",
    image: "/assets/images/tax-bot.png",
    tech: [
      { Icon: SiReact, color: "text-[#0088CC]" },
      { Icon: SiCss3, color: "text-blue-500" },
      { Icon: SiExpo, color: "text-black dark:text-white" },
      { Icon: SiTypescript, color: "text-[#3178C6]" },
      { imgPath: "/icons/huggingface.svg" },
      { imgPath: "/icons/icons8-gemini.svg" },
      { imgPath: "/icons/render.svg" },
    ],
    link: "https://github.com/GajendarTiwari/Tax-bot-",
    docs: "https://drive.google.com/file/d/1nJaA6BCPfAQAImqusAXH5v49jpwnQqkV/view?usp=drive_link",
    live: "https://tax-bot-ue8b.onrender.com/",
  },
];

const Projects = () => {
  return (
    <section
      className="py-20 bg-white dark:bg-black relative overflow-hidden"
      id="projects"
    >
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
          <LinkPreview url="https://github.com/GajendarTiwari?tab=repositories">
            My Projects
          </LinkPreview>
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
          Some of my featured works
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <CardContainer key={index} className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full rounded-xl p-6 border flex flex-col justify-between">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-black dark:text-white"
              >
                {project.title}
              </CardItem>

              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {project.description}
              </CardItem>

              {/* ✅ FIXED IMAGE STYLING */}
              <CardItem
                translateZ="100"
                className="w-full h-60 flex items-center justify-center"
              >
                <Image
                  src={project.image}
                  height={240}
                  width={240}
                  className="object-contain h-full max-h-full rounded-xl group-hover/card:shadow-xl"
                  alt={project.title}
                />
              </CardItem>

              <div className="flex justify-between items-center sm:mt-8 w-full">
                <div className="flex space-x-3 items-center">
                  {project.tech.map((tech, i) =>
                    tech.Icon ? (
                      <tech.Icon key={i} className={`text-2xl ${tech.color}`} />
                    ) : (
                      <Image
                        key={i}
                        src={tech.imgPath}
                        alt="tech-icon"
                        width={24}
                        height={24}
                        className="rounded-full"
                      />
                    )
                  )}
                </div>

                <div className="flex space-x-2">
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href={project.link}
                    target="__blank"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    View →
                  </CardItem>

                  {project.docs && (
                    <CardItem
                      translateZ={20}
                      as={Link}
                      href={project.docs}
                      target="__blank"
                      className="px-4 py-2 rounded-xl bg-yellow-600 text-white text-xs font-bold"
                    >
                      Docs 📄
                    </CardItem>
                  )}

                  {project.live && (
                    <CardItem
                      translateZ={20}
                      as={Link}
                      href={project.live}
                      target="__blank"
                      className="px-4 py-2 rounded-xl bg-green-600 text-white text-xs font-bold"
                    >
                      Live 🌐
                    </CardItem>
                  )}
                </div>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </section>
  );
};

export default Projects;
