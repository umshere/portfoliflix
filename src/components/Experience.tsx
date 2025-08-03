import React from "react";
import type { Experience } from "../lib/data";

/**
 * Gamma-style Experience timeline:
 * - Uses `.section`, `.container`, `.timeline` utilities from globals.css
 * - Central vertical line with numbered badges, left/right panes
 */
export default function ExperienceSection({ exp }: { exp: Experience }) {
  return (
    <section className="section">
      <div className="container">
        <header className="section__head">
          <h2 className="section__title">Professional Experience</h2>
        </header>

        <ol className="timeline">
          {exp.roles.map((r, i) => (
            <li key={i} className="timeline__item">
              <div className="timeline__badge">{i + 1}</div>

              <div className="timeline__pane">
                <h3 className="card__title">
                  {r.title} • {r.company}
                  {r.client ? ` (${r.client})` : ""}
                </h3>
                <p className="text-subtle text-sm">
                  {r.location} • {r.start} – {r.end}
                </p>
              </div>

              <div className="timeline__pane">
                <div className="card">
                  <ul className="list list--dense">
                    {r.bullets.map((b, bi) => (
                      <li key={bi}>{b}</li>
                    ))}
                  </ul>
                  {r.tags?.length ? (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {r.tags.map((t) => (
                        <span key={t} className="badge badge--soft">
                          {t}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
