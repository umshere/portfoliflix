import React from "react";
import type { Skills as SkillsT } from "../lib/data";

const order: (keyof SkillsT)[] = [
  "languages",
  "frontend",
  "backend",
  "testing",
  "scriptingMarkup",
  "databasesClients",
  "versionControl",
  "ciCdBuild",
  "cloudDevOps",
  "methodologies",
  "idesOs",
  "aiAgentic",
];

/**
 * Gamma-style Skills:
 * - Section + container wrappers
 * - Each category as a small heading with a chip group
 * - Chips styled via `.badge` utilities; layout via `.grid` and flex gaps
 */
export default function Skills({ skills }: { skills: SkillsT }) {
  return (
    <section className="section">
      <div className="container">
        <header className="section__head">
          <h2 className="section__title">Skills</h2>
        </header>

        <div className="grid grid--3">
          {order.map((k) => (
            <div key={k} className="card">
              <h3 className="card__title text-sm uppercase tracking-wide text-subtle">
                {String(k).replace(/[A-Z]/g, (m) => " " + m)}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {skills[k].map((s) => (
                  <span key={s} className="badge badge--soft">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
