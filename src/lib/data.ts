export type Profile = {
  name: string;
  headline: string;
  contact: { email: string; phone: string; location: string };
  links: { linkedin: string; github: string };
  intro: string;
};

export type Skills = {
  languages: string[];
  frontend: string[];
  backend: string[];
  testing: string[];
  scriptingMarkup: string[];
  databasesClients: string[];
  versionControl: string[];
  ciCdBuild: string[];
  cloudDevOps: string[];
  methodologies: string[];
  idesOs: string[];
  aiAgentic: string[];
};

export type Degree = {
  degree: string;
  institution: string;
  location: string;
  start: string;
  end: string;
};

export type Education = { degrees: Degree[] };

export type Role = {
  company: string;
  client?: string;
  title: string;
  location: string;
  start: string;
  end: string;
  bullets: string[];
  tags: string[];
};

export type Experience = { roles: Role[] };

export type Highlights = { summary: string[] };

export type Extras = { bonusSkills: string[]; badges: string[] };

export async function loadJson<T>(path: string) {
  const res = await fetch(path, { cache: "no-store" });
  if (!res.ok) throw new Error(`Failed to load ${path}: ${res.status}`);
  return (await res.json()) as T;
}
