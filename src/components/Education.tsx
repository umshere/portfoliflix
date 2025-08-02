import React from "react";
import type { Education } from "../lib/data";

export default function EducationSection({ ed }: { ed: Education }) {
  return (
    <section>
      <h2>Education</h2>
      <ul>
        {ed.degrees.map((d, i) => (
          <li key={i}>
            <strong>{d.degree}</strong> — {d.institution} ({d.start}–{d.end})
          </li>
        ))}
      </ul>
    </section>
  );
}
