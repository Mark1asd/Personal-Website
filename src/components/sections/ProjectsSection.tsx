import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

import soundShiftImage from "../../assets/images/SoundShift.png";
import jobListingImage from "../../assets/images/ReactJobs.png";
import drumKitImage from "../../assets/images/DrumKit.png";
import minesweeperImage from "../../assets/images/Minesweeper.png";

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  live?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "SoundShift",
    description:
      "SoundShift is an intelligent music recommendation platform designed to enhance user experience by leveraging user feedback for personalized music suggestions.",
    image: soundShiftImage,
    tags: ["React", "Next.js", "Firebase", "TypeScript", "Tailwind CSS", "Gemini"],
    github: "https://github.com/Mark1asd/SoundShiftAI",
    featured: true,
  },
  {
    title: "Job Listing",
    description:
      "A React-based job listings application with full CRUD functionality, built using Vite and Tailwind CSS, and powered by a mock REST API with JSON Server.",
    image: jobListingImage,
    tags: ["React", "JavaScript", "TailwindCSS", "JSON Server"],
    github: "https://github.com/Mark1asd/React-Job-Listing?tab=readme-ov-file",
    featured: true,
  },
  {
    title: "Drum-Kit",
    description:
      "A simple Drum Kit web app built with HTML, CSS, and JavaScript. Click instruments or press keyboard keys to play different drum sounds.",
    image: drumKitImage,
    tags: ["JavaScript", "HTML", "CSS"],
    live: "https://mark1asd.github.io/Drum-Kit/",
    github: "https://github.com/Mark1asd/Drum-Kit?tab=readme-ov-file",
  },
  {
    title: "MineSweeper",
    description:
      "A classic Minesweeper game implemented with C++ and SFML, featuring OOP design, random mine placement, and configurable board sizes.",
    image: minesweeperImage,
    tags: ["C++", "SFML", "OOP"],
    github: "https://github.com/Mark1asd/Minesweeper",
  },
];

function isRealLink(href?: string) {
  return Boolean(href && href !== "#");
}

export function ProjectsSection() {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative py-32 px-6" ref={ref}>
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-sm tracking-wider text-blue-400">
            04. PROJECTS
          </span>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Featured <span className="text-white/40">work</span>
          </h2>
        </motion.div>

        {/* Featured */}
        <div className="mb-20 space-y-24">
          {featured.map((project, i) => {
            const reverse = i % 2 === 1;

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="grid items-center gap-8 lg:grid-cols-2"
              >
                {/* Image */}
                <div className={["relative group", reverse ? "lg:order-2" : ""].join(" ")}>
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="aspect-video w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/80 via-transparent to-transparent" />
                  </div>

                  <div className="absolute -left-6 -top-6 select-none text-8xl font-bold text-white/5">
                    0{i + 1}
                  </div>
                </div>

                {/* Content */}
                <div className={[reverse ? "lg:order-1 lg:text-right" : ""].join(" ")}>
                  <h3 className="mb-4 text-3xl font-bold text-white">
                    {project.title}
                  </h3>

                  <p className="mb-6 leading-relaxed text-white/60">
                    {project.description}
                  </p>

                  <div
                    className={[
                      "mb-6 flex flex-wrap gap-2",
                      reverse ? "lg:justify-end" : "",
                    ].join(" ")}
                  >
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-sm text-blue-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Featured: only GitHub */}
                  {project.github && (
                    <div className={["flex gap-4", reverse ? "lg:justify-end" : ""].join(" ")}>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="group inline-flex items-center gap-2 text-white/70 transition-colors hover:text-white"
                      >
                        <Github className="h-5 w-5" />
                        <span>Source</span>
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          <h3 className="mb-8 text-xl font-semibold text-white/60">
            Other Projects
          </h3>

          <div className="grid gap-6 md:grid-cols-2">
            {others.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 + i * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all duration-300 hover:border-white/20"
              >
                {/* Image */}
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-48 w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/85 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-3 flex items-start justify-between gap-4">
                    <h4 className="text-lg font-semibold text-white transition-colors group-hover:text-blue-300">
                      {project.title}
                    </h4>
                    <ArrowUpRight className="h-5 w-5 text-white/40 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-300" />
                  </div>

                  <p className="mb-4 text-sm text-white/55">{project.description}</p>

                  <div className="mb-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs text-white/45">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-4">
                    {isRealLink(project.live) && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live
                      </a>
                    )}

                    {isRealLink(project.github) && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white"
                      >
                        <Github className="h-4 w-4" />
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}