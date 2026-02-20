import { Background } from "./components/layout/Background";
import { NavBar } from "./components/layout/NavBar";
import { HeroSection } from "./components/sections/HeroSection";
import { AboutSection } from "./components/sections/AboutSection";
import { SkillsSection } from "./components/sections/SkillsSection";
import { ExperienceSection } from "./components/sections/ExperienceSection";

export default function App() {
  return (
    <Background>
      <div id="top" />
      <NavBar />

      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
      </main>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-6xl px-6 text-sm text-white/50">
          © {new Date().getFullYear()} Mark Bychin.
        </div>
      </footer>
    </Background>
  );
}