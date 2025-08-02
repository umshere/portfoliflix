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

export default function Skills({ skills }: { skills: SkillsT }) {
  return (
    <section>
      <h2>Skills</h2>
      {order.map((k) => (
        <div key={k} style={{ marginBottom: 8 }}>
          <strong
            style={{
              display: "inline-block",
              minWidth: 180,
              textTransform: "capitalize",
            }}
          >
            {String(k).replace(/[A-Z]/g, (m) => " " + m)}
          </strong>
          {skills[k].map((s) => (
            <span
              key={s}
              style={{
                display: "inline-block",
                padding: "4px 8px",
                margin: "2px 6px 2px 0",
                border: "1px solid var(--border)",
                borderRadius: 12,
                background: "var(--chip)",
              }}
            >
              {s}
            </span>
          ))}
        </div>
      ))}
    </section>
  );
}
