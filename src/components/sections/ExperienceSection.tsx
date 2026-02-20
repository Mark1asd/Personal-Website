import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase } from "lucide-react";

type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  color: string;
  bullets: string[];
};

const experiences: Experience[] = [
  {
    role: "Software Engineer",
    company: "Mid Atlantic Finance",
    location: "Tampa, FL",
    period: "03/2025 – Present",
    color: "from-blue-500 to-cyan-500",
    bullets: [
      "Maintain .NET Core loan apps and Azure App Services for internal financial workflows.",
      "Implemented secure REST APIs with JWT authentication, improving login speed & reliability by 10%.",
      "Refactored legacy .NET Framework code to .NET 8, improving maintainability and deployment time.",
      "Integrated Azure Key Vault and Application Insights for secure credential storage and live monitoring.",
    ],
  },
  {
    role: "Software Engineer",
    company: "ACS Laboratory",
    location: "Tampa, FL",
    period: "01/2024 – 02/2025",
    color: "from-purple-500 to-pink-500",
    bullets: [
      "Enhanced user engagement by 30% through redesigning with Vue.js and responsive CSS layouts.",
      "Automated manual data-entry tasks using Laravel jobs and scheduled scripts, saving 5 FTEs.",
      "Developed a robotic workflow system in PHP and Vue.js that reduced manual processing time by 60%.",
      "Integrated security middleware, reducing system risks by 25%.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Haneke Design",
    location: "Tampa, FL",
    period: "06/2023 – 01/2024",
    color: "from-emerald-500 to-teal-500",
    bullets: [
      "Built RESTful APIs with structured error handling in .NET Core, lowering API failure rate by 30%.",
      "Optimized SQL queries and compression to cut latency by 25%.",
      "Designed microservice-based architecture for client projects, ensuring reusability and scalability.",
      "Implemented React components for client-facing features with design and QA teams.",
    ],
  },
  {
    role: "Jr. Software Engineer",
    company: "Blue Fetch",
    location: "Clearwater, FL",
    period: "09/2021 – 01/2023",
    color: "from-orange-500 to-amber-500",
    bullets: [
      "Optimized PHP app speed with query caching and async JS, increasing load time performance by 45%.",
      "Scaled website infrastructure using Docker containers, improving traffic handling by 30%.",
      "Integrated MySQL tracking features for logistics, improving delivery reporting accuracy by 15%.",
    ],
  },
];

export function ExperienceSection() {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative py-32 px-6" ref={ref}>
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-sm tracking-wider text-blue-400">
            03. EXPERIENCE
          </span>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Where I&apos;ve <span className="text-white/40">worked</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line on desktop */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-white/10 md:block" />

          <div className="space-y-12">
            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={`${exp.company}-${exp.period}`}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="relative grid gap-8 md:grid-cols-2"
                >
                  {/* Timeline dot (desktop) */}
                  <div className="absolute left-1/2 top-6 hidden -translate-x-1/2 md:block">
                    <div className="h-4 w-4 rounded-full border-2 border-[#0a0a0f] bg-white/10">
                      <div className={`h-full w-full rounded-full bg-gradient-to-br ${exp.color}`} />
                    </div>
                  </div>

                  {/* Date column (desktop) */}
                  <div
                    className={[
                      "hidden md:flex",
                      isLeft ? "justify-end pr-12 text-right" : "order-2 justify-start pl-12 text-left",
                    ].join(" ")}
                  >
                    <div>
                      <span className="font-mono text-sm text-white/45">
                        {exp.period}
                      </span>
                      <p className="mt-1 text-sm text-white/30">{exp.location}</p>
                    </div>
                  </div>

                  {/* Card column */}
                  <div className={[isLeft ? "md:pl-12" : "md:order-1 md:pr-12"].join(" ")}>
                    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-500 hover:border-white/20">
                      {/* glow */}
                      <div
                        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 transition-opacity duration-500 group-hover:opacity-5`}
                      />

                      <div className="relative z-10">
                        <div className="mb-1 flex items-center gap-3">
                          <div className={`rounded-lg bg-gradient-to-br ${exp.color} p-2`}>
                            <Briefcase className="h-4 w-4 text-white" />
                          </div>
                          {/* mobile date */}
                          <span className="font-mono text-xs text-white/45 md:hidden">
                            {exp.period}
                          </span>
                        </div>

                        <h3 className="mt-3 text-xl font-bold text-white">{exp.role}</h3>

                        <p
                          className={[
                            "mb-4 font-medium text-transparent bg-clip-text bg-gradient-to-r",
                            exp.color,
                          ].join(" ")}
                        >
                          {exp.company} · {exp.location}
                        </p>

                        <ul className="space-y-2">
                          {exp.bullets.map((b) => (
                            <li key={b} className="flex items-start gap-2 text-sm text-white/60">
                              <span
                                className={`mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-br ${exp.color}`}
                              />
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}