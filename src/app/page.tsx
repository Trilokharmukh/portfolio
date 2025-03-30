import HeroSection from "@/components/HeroSection";
// import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      {/* <AboutSection /> */}
      <ExperienceSection />

      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
