import React from "react";

export default function Highlights({ items }: { items: string[] }) {
  return (
    <section>
      <h2>Highlights</h2>
      <ul>
        {items.map((h, i) => (
          <li key={i}>{h}</li>
        ))}
      </ul>
    </section>
  );
}
