import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Sparkles, Database, Cloud } from "lucide-react";

type SkillCategory = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  color: string;
  skills: string[];
};

type CSSVarStyle = React.CSSProperties & {
  ["--marquee-duration"]?: string;
};

export function SkillsSection() {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const marqueeStyle: CSSVarStyle = { "--marquee-duration": "28s" };

  const skillCategories: SkillCategory[] = [
    {
      icon: Code2,
      title: "Languages",
      color: "from-blue-500 to-cyan-500",
      skills: ["C#/C++", "TypeScript", "JavaScript", "Python", "PHP", "Java"],
    },
    {
      icon: Sparkles,
      title: "Frameworks",
      color: "from-purple-500 to-pink-500",
      skills: [".NET", "ASP.NET Core", "Blazor", "React", "Laravel", "Vue.js"],
    },
    {
      icon: Database,
      title: "Databases",
      color: "from-emerald-500 to-teal-500",
      skills: ["SQL Server", "MySQL", "MongoDB"],
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      color: "from-orange-500 to-red-500",
      skills: ["Azure", "Docker", "CI/CD", "Git", "App Insights", "Key Vault"],
    },
  ];

  const technologies = [
    "C#/C++",
    ".NET",
    "ASP.NET Core",
    "Blazor",
    "React",
    "TypeScript",
    "Azure",
    "SQL Server",
    "Docker",
    "CI/CD",
    "Key Vault",
    "App Insights",
    "Laravel",
    "Vue.js",
    "MongoDB",
  ];

  return (
    <section id="skills" className="relative py-32 px-6" ref={ref}>
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-sm tracking-wider text-blue-400">
            02. SKILLS
          </span>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            My <span className="text-white/40">expertise</span>
          </h2>
        </motion.div>

        {/* Skill Cards */}
        <div className="mb-20 grid gap-6 md:grid-cols-2">
          {skillCategories.map((category, i) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-500 hover:border-white/20"
              >
                <div
                  className={[
                    "pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r",
                    category.color,
                    "opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-10",
                  ].join(" ")}
                />

                <div className="relative z-10">
                  <div
                    className={[
                      "mb-4 inline-flex rounded-xl bg-gradient-to-r p-3",
                      category.color,
                    ].join(" ")}
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </div>

                  <h3 className="mb-4 text-xl font-bold">{category.title}</h3>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/60"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tech Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.35 }}
          className="py-8"
        >
          <div className="marquee">
            <div className="marquee__track" style={marqueeStyle}>
              <div className="marquee__group">
                {technologies.map((tech) => (
                  <span
                    key={`a-${tech}`}
                    className="pointer-events-none text-2xl font-bold text-white/15 md:text-4xl"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="marquee__group" aria-hidden="true">
                {technologies.map((tech) => (
                  <span
                    key={`b-${tech}`}
                    className="pointer-events-none text-2xl font-bold text-white/15 md:text-4xl"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}