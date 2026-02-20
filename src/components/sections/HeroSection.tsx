import { motion } from "framer-motion";
import { ArrowDown, Linkedin, Mail } from "lucide-react";
import { site } from "../../config/site";
import { ButtonLink } from "../ui/ButtonLink";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[92vh] items-center justify-center px-6">
      <div className="mx-auto max-w-4xl text-center">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
          <span className="text-sm text-white/60">Available for opportunities</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="mt-8 text-5xl font-bold leading-tight md:text-7xl"
        >
          <span className="text-white">Hi, I'm </span>
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent">
            {site.name}
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/65 md:text-xl"
        >
          {site.headline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <ButtonLink href="#projects" variant="primary">
            View My Work <span className="ml-2 inline-block">→</span>
          </ButtonLink>

          <ButtonLink href="#contact" variant="secondary">
            Get In Touch
          </ButtonLink>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
          className="mt-10 flex justify-center gap-4"
        >
          <ButtonLink
            href={site.linkedin}
            variant="icon"
            external
            ariaLabel="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </ButtonLink>

          <ButtonLink
            href={`mailto:${site.email}`}
            variant="icon"
            ariaLabel="Email"
          >
            <Mail className="h-5 w-5" />
          </ButtonLink>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-[0.25em]">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
          >
            <ArrowDown className="h-4 w-4" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}