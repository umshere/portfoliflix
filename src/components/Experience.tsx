import React from "react";
import type { Experience } from "../lib/data";

export default function ExperienceSection({ exp }: { exp: Experience }) {
  return (
    <section>
      <h2>Experience</h2>
      <div style={{ display: "grid", gap: 12 }}>
        {exp.roles.map((r, i) => (
          <article
            key={i}
            style={{
              border: "1px solid var(--border)",
              borderRadius: 12,
              padding: 16,
              background: "var(--card)",
            }}
          >
            <header
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                gap: 8,
                flexWrap: "wrap",
              }}
            >
              <h3 style={{ margin: 0 }}>
                {r.title} • {r.company}
                {r.client ? " (" + r.client + ")" : ""}
              </h3>
              <small>
                {r.location} • {r.start} – {r.end}
              </small>
            </header>
            <ul style={{ marginTop: 8, marginBottom: 8 }}>
              {r.bullets.map((b, bi) => (
                <li key={bi}>{b}</li>
              ))}
            </ul>
            <div>
              {r.tags.map((t) => (
                <span
                  key={t}
                  style={{
                    display: "inline-block",
                    padding: "2px 8px",
                    margin: "2px 6px 0 0",
                    border: "1px dashed var(--border)",
                    borderRadius: 12,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
