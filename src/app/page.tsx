import Header from "@/components/Header";
import About from "@/components/About";
import Skills from "@/components/Skills";
import ExperienceSection from "@/components/Experience";
import EducationSection from "@/components/Education";
import Highlights from "@/components/Highlights";
import Hero from "@/components/Hero";
import SectionsRenderer from "@/components/Sections";
import {
  loadJson,
  type Profile,
  type Skills as SkillsT,
  type Experience as ExperienceT,
  type Education as EducationT,
  type Highlights as HighlightsT,
} from "@/lib/data";

export default async function Page() {
  const [profile, skills, exp, education, highlights, hero, sections] = await Promise.all([
    loadJson<Profile>("/data/profile.json"),
    loadJson<SkillsT>("/data/skills.json"),
    loadJson<ExperienceT>("/data/experience.json"),
    loadJson<EducationT>("/data/education.json"),
    loadJson<HighlightsT>("/data/highlights.json"),
    loadJson<{ title: string; subtitle: string; ctas?: { label: string; href: string; variant?: "solid" | "outline" }[]; backgroundImage?: string; overlay?: boolean }>("/data/hero.json"),
    loadJson<{ sections: {
      id: "journey" | "expertise" | "ai" | "spotlight" | "leadership" | "principles" | "experience" | "education" | "connect";
      title: string;
      items?: { index: number; role: string; company: string; location?: string; period?: string; summary?: string }[];
      columns?: { heading: string; items: string[] }[];
      bullets?: string[];
      image?: string;
      arrows?: { heading: string; text: string }[];
      note?: string;
      counters?: { value: string; label: string; caption: string }[];
      cards?: { heading: string; text: string }[];
      timeline?: { index: number; role: string; company: string; location?: string; period?: string; bullets?: string[] }[];
      formal?: { degree: string; institution: string; period: string };
      certifications?: string[];
      learning?: string[];
      contact?: { email: string; phone: string; location: string; links: { label: string; href: string }[] };
    }[] }>("/data/sections.json"),
  ]);

  return (
    <main>
      <Hero
        title={hero.title}
        subtitle={hero.subtitle}
        ctas={hero.ctas}
        backgroundImage={hero.backgroundImage}
        overlay={hero.overlay}
      />
      {/* Removed legacy Header block below hero; Header is unstyled and duplicates hero/profile info */}
      {/* <Header
        name={profile.name}
        headline={profile.headline}
        links={profile.links}
      /> */}
      <About intro={profile.intro} contact={profile.contact} />
      <Highlights items={highlights.summary} />
      <Skills skills={skills} />
      <ExperienceSection exp={exp} />
      <EducationSection ed={education} />
      <SectionsRenderer data={sections} />
    </main>
  );
}
