import React from "react";
import type { Education } from "../lib/data";

/**
 * Gamma-style Education:
 * - Section + container wrappers
 * - Single card list with subtle border and muted metadata
 */
export default function EducationSection({ ed }: { ed: Education }) {
  return (
    <section className="section">
      <div className="container">
        <header className="section__head">
          <h2 className="section__title">Education</h2>
        </header>

        <div className="card">
          <ul className="list">
            {ed.degrees.map((d, i) => (
              <li key={i}>
                <div className="flex items-baseline justify-between gap-4 flex-wrap">
                  <h3 className="card__title">{d.degree}</h3>
                  <span className="text-subtle text-sm">
                    {d.start} – {d.end}
                  </span>
                </div>
                <p className="text-muted">{d.institution}</p>
                
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
