import React from "react";

/**
 * Gamma-style About section
 * - Uses .section + .container wrappers from globals.css
 * - Typography via tokens, muted text, and spacing utilities
 * - Contact presented as inline "meta" row with subtle dividers
 */
export default function About({
  intro,
  contact,
}: {
  intro: string;
  contact: { email: string; phone: string; location: string };
}) {
  const telHref = "tel:" + contact.phone.replace(/[^+\d]/g, "");
  const mailHref = "mailto:" + contact.email;

  return (
    <section className="section">
      <div className="container">
        <header className="section__head">
          <h2 className="section__title">About</h2>
        </header>

        <div className="prose prose-invert max-w-none text-muted">
          <p className="text-lg leading-relaxed">{intro}</p>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-muted">
          <a className="badge badge--soft" href={mailHref}>
            {contact.email}
          </a>
          <span className="divider" />
          <a className="badge badge--soft" href={telHref}>
            {contact.phone}
          </a>
          <span className="divider" />
          <span className="badge badge--soft">{contact.location}</span>
        </div>
      </div>
    </section>
  );
}
