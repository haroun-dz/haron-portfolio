import About from "@/components/about";
import Atestation from "@/components/attestations";
import Companies from "@/components/companies";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import MaxWidthWraper from "@/components/maxWidthWraper";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Intro />
      <SectionDivider />
      <About />
      <Companies />
      <Skills />
      <Experience />
      <Projects />

      <Atestation />
      <Contact />
    </main>
  );
}
