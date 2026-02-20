import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, GraduationCap, BadgeCheck } from "lucide-react";
import profileImage from "../../assets/images/mark-bychin-profile.png";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: "5+", label: "Years Experience" },
    { value: "Azure Certified", label: "Azure-based systems, CI/CD" },
    { value: "3.7 / 4.0", label: "University GPA" },
    { value: "4", label: "Companies Worked" },
  ];

  return (
    <section id="about" className="relative py-32 px-6" ref={ref}>
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-blue-400 font-mono text-sm tracking-wider">
            01. ABOUT
          </span>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            A little bit <span className="text-white/40">about me</span>
          </h2>
        </motion.div>

        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 overflow-hidden rounded-2xl">
              <img
                src={profileImage}
                alt="Mark Bychin"
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
            </div>

            <div className="absolute -top-4 -left-4 h-full w-full rounded-2xl border border-blue-500/30 -z-10" />
            <div className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl border border-purple-500/30 -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="flex flex-wrap items-center gap-4 text-sm text-white/50">
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> Tampa, FL
              </span>
              <span className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4" /> B.S. Computer Science, UF
              </span>
              <span className="flex items-center gap-2">
                <BadgeCheck className="h-4 w-4 text-blue-400" /> Azure Cloud Engineer

              </span>
            </div>

            <p className="text-lg leading-relaxed text-white/70">
              Software Engineer with 5 years of experience building full-stack
              applications using .NET Core, Laravel, React, and Vue.js. I
              specialize in REST API design, SQL optimization, and CI/CD
              automation on Azure.
            </p>

            <p className="leading-relaxed text-white/50">
              I’m passionate about writing clean, maintainable code and
              architecting scalable backend systems. From refactoring legacy
              codebases to integrating secure cloud infrastructure, I thrive on
              solving complex engineering challenges.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="rounded-xl border border-white/10 bg-white/5 p-4"
                >
                  <p className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-3xl font-bold text-transparent">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-white/40">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}