"use client";

import React from "react";

type CTA = {
  label: string;
  href: string;
  variant?: "solid" | "outline";
};

type HeroProps = {
  title: string;
  subtitle: string;
  ctas?: CTA[];
  backgroundImage?: string;
  overlay?: boolean;
};

function Hero({
  title,
  subtitle,
  ctas = [],
  backgroundImage,
  overlay = true,
}: HeroProps) {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
      }}
    >
      {overlay && <div className="hero__overlay" />}

      <div className="container hero__content">
        <h1 className="hero__title">{title}</h1>
        <p className="hero__subtitle">{subtitle}</p>

        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          {ctas.map((cta) => {
            const isSolid = cta.variant !== "outline";
            const cls = ["btn", isSolid ? "btn--solid" : "btn--outline"].join(" ");
            return (
              <a key={cta.href + cta.label} href={cta.href} className={cls}>
                {cta.label}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Hero;
