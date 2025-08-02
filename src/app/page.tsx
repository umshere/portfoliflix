import Header from "@/components/Header";
import About from "@/components/About";
import Skills from "@/components/Skills";
import ExperienceSection from "@/components/Experience";
import EducationSection from "@/components/Education";
import Highlights from "@/components/Highlights";
import {
  loadJson,
  type Profile,
  type Skills as SkillsT,
  type Experience as ExperienceT,
  type Education as EducationT,
  type Highlights as HighlightsT,
} from "@/lib/data";

export default async function Page() {
  const [profile, skills, exp, education, highlights] = await Promise.all([
    loadJson<Profile>("/data/profile.json"),
    loadJson<SkillsT>("/data/skills.json"),
    loadJson<ExperienceT>("/data/experience.json"),
    loadJson<EducationT>("/data/education.json"),
    loadJson<HighlightsT>("/data/highlights.json"),
  ]);

  return (
    <main>
      <Header
        name={profile.name}
        headline={profile.headline}
        links={profile.links}
      />
      <About intro={profile.intro} contact={profile.contact} />
      <Highlights items={highlights.summary} />
      <Skills skills={skills} />
      <ExperienceSection exp={exp} />
      <EducationSection ed={education} />
    </main>
  );
}
