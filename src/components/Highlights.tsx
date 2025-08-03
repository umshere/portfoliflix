import React from "react";

/**
 * Gamma-style Highlights:
 * - Section + container wrappers
 * - Grid of soft cards with subtle borders and spacing rhythm
 */
export default function Highlights({ items }: { items: string[] }) {
  return (
    <section className="section">
      <div className="container">
        <header className="section__head">
          <h2 className="section__title">Highlights</h2>
        </header>

        <div className="grid grid--3">
          {items.map((h, i) => (
            <div key={i} className="card">
              <p className="text-base text-muted">{h}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
