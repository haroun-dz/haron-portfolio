import About from "@/components/about";
import Atestation from "@/components/attestations";
import Companies from "@/components/companies";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import { formatorData, projectsData } from "@/lib/data";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Intro />
      <About />
      <Companies />
      <Skills />
      <SectionDivider />
      <Experience />
      <Projects heading={"Projucts"} data={projectsData} />
      <Projects heading={"FORMATEUR/CONSULTANT"} data={formatorData} />

      <Atestation />
      <Contact />
    </main>
  );
}
