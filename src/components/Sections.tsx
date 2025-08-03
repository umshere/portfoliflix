"use client";
import React from "react";

type JourneyItem = {
  index: number;
  role: string;
  company: string;
  location?: string;
  period?: string;
  summary?: string;
};

type ExpertiseCol = { heading: string; items: string[] };

type Arrow = { heading: string; text: string };

type Counter = { value: string; label: string; caption: string };

type Card = { heading: string; text: string };

type TimelineItem = {
  index: number;
  role: string;
  company: string;
  location?: string;
  period?: string;
  bullets?: string[];
};

type Contact = {
  email: string;
  phone: string;
  location: string;
  links: { label: string; href: string }[];
};

type SectionsData = {
  sections: {
    id:
      | "journey"
      | "expertise"
      | "ai"
      | "spotlight"
      | "leadership"
      | "principles"
      | "experience"
      | "education"
      | "connect";
    title: string;
    // journey
    items?: JourneyItem[];
    // expertise
    columns?: ExpertiseCol[];
    // ai
    bullets?: string[];
    image?: string;
    // spotlight
    arrows?: Arrow[];
    note?: string;
    // leadership
    counters?: Counter[];
    // principles
    cards?: Card[];
    // experience
    timeline?: TimelineItem[];
    // education
    formal?: { degree: string; institution: string; period: string };
    certifications?: string[];
    learning?: string[];
    // connect
    contact?: Contact;
  }[];
};

const Section = ({
  title,
  dark = false,
  children,
}: {
  title?: string;
  dark?: boolean;
  children: React.ReactNode;
}) => {
  const sectionClass = dark ? "section" : "section section--no-borders";
  return (
    <section className={sectionClass}>
      <div className="container">
        {title ? <h2>{title}</h2> : null}
        {children}
      </div>
    </section>
  );
};

const Pill = ({ text }: { text: string }) => (
  <span
    style={{
      display: "inline-block",
      padding: "6px 10px",
      borderRadius: 999,
      background: "#141416",
      color: "#F5F547",
      border: "1px solid #2a2b31",
      fontSize: 13,
      marginRight: 8,
      marginBottom: 8,
    }}
  >
    {text}
  </span>
);

// Journey timeline (compact numbered items similar to Gamma "Professional Journey")
const Journey = ({ items }: { items: JourneyItem[] }) => (
  <div className="grid" style={{ gap: 16 }}>
    {items.map((it) => (
      <div
        key={it.index}
        style={{
          display: "grid",
          gridTemplateColumns: "40px 1fr",
          alignItems: "start",
          gap: 12,
        }}
      >
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: 8,
            background: "#141416",
            color: "#F5F547",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 800,
            border: "1px solid #2a2b31",
          }}
        >
          {it.index}
        </div>
        <div>
          <div style={{ fontWeight: 700 }}>
            {it.role}
          </div>
          <div style={{ opacity: 0.8, fontSize: 14, marginTop: 2 }}>
            {it.company}
            {it.location ? `, ${it.location}` : ""}
          </div>
          <div style={{ opacity: 0.7, fontSize: 13, marginTop: 2 }}>
            {it.period}
          </div>
          {it.summary ? (
            <div style={{ marginTop: 6, lineHeight: 1.6 }}>{it.summary}</div>
          ) : null}
        </div>
      </div>
    ))}
  </div>
);

const Expertise = ({ columns }: { columns: ExpertiseCol[] }) => (
  <div className="grid" style={{ gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
    {columns.map((col) => (
      <div key={col.heading} className="card" style={{ padding: 16 }}>
        <div style={{ color: "#F5F547", fontWeight: 700, marginBottom: 8 }}>
          {col.heading}
        </div>
        <div>
          {col.items.map((i) => (
            <Pill key={i} text={i} />
          ))}
        </div>
      </div>
    ))}
  </div>
);

const AIDevelopment = ({ bullets, image }: { bullets: string[]; image?: string }) => (
  <div className="grid" style={{ gap: 20, gridTemplateColumns: image ? "1.2fr 1fr" : "1fr", alignItems: "center" }}>
    <div>
      <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.8 }}>
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
    {image ? (
      <div>
        <img
          src={image}
          alt=""
          style={{
            width: "100%",
            height: "auto",
            borderRadius: 12,
            border: "1px solid #2a2b31",
          }}
        />
      </div>
    ) : null}
  </div>
);

// Spotlight with arrow-like callouts
const Spotlight = ({ arrows, note }: { arrows: Arrow[]; note?: string }) => (
  <div style={{ display: "grid", gap: 16 }}>
    <div
      style={{
        display: "grid",
        gap: 16,
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      }}
    >
      {arrows.map((a) => (
        <div
          key={a.heading}
          style={{
            background: "#141416",
            border: "1px solid #2a2b31",
            borderRadius: 12,
            padding: 16,
          }}
        >
          <div style={{ color: "#F5F547", fontWeight: 700, marginBottom: 6 }}>
            {a.heading}
          </div>
          <div style={{ lineHeight: 1.6 }}>{a.text}</div>
        </div>
      ))}
    </div>
    {note ? (
      <div
        style={{
          marginTop: 6,
          opacity: 0.9,
          borderLeft: "3px solid #F5F547",
          paddingLeft: 10,
        }}
      >
        {note}
      </div>
    ) : null}
  </div>
);

const Counters = ({ counters }: { counters: Counter[] }) => (
  <div
    style={{
      display: "grid",
      gap: 16,
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    }}
  >
    {counters.map((c) => (
      <div
        key={c.label}
        style={{
          background: "#141416",
          border: "1px solid #2a2b31",
          borderRadius: 12,
          padding: 20,
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: 32, fontWeight: 800, color: "#F5F547" }}>
          {c.value}
        </div>
        <div style={{ fontWeight: 700, marginTop: 4 }}>{c.label}</div>
        <div style={{ opacity: 0.8, marginTop: 6, fontSize: 14 }}>{c.caption}</div>
      </div>
    ))}
  </div>
);

const PrincipleCards = ({ cards }: { cards: Card[] }) => (
  <div
    style={{
      display: "grid",
      gap: 16,
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    }}
  >
    {cards.map((c) => (
      <div
        key={c.heading}
        style={{
          background: "#141416",
          border: "1px solid #2a2b31",
          borderRadius: 12,
          padding: 16,
        }}
      >
        <div style={{ color: "#F5F547", fontWeight: 700, marginBottom: 8 }}>
          {c.heading}
        </div>
        <div style={{ lineHeight: 1.6 }}>{c.text}</div>
      </div>
    ))}
  </div>
);

// Detailed Experience timeline (numbered with bullet lists)
const ExperienceTimeline = ({ items }: { items: TimelineItem[] }) => (
  <div style={{ display: "grid", gap: 20 }}>
    {items.map((it) => (
      <div
        key={it.index}
        style={{
          display: "grid",
          gridTemplateColumns: "40px 1fr",
          gap: 12,
        }}
      >
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: 8,
            background: "#141416",
            color: "#F5F547",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 800,
            border: "1px solid #2a2b31",
          }}
        >
          {it.index}
        </div>
        <div>
          <div style={{ fontWeight: 800 }}>{it.role}</div>
          <div style={{ opacity: 0.85, marginTop: 2 }}>
            {it.company}
            {it.location ? `, ${it.location}` : ""}
          </div>
          <div style={{ opacity: 0.7, fontSize: 13, marginTop: 2 }}>
            {it.period}
          </div>
          {it.bullets && it.bullets.length ? (
            <ul style={{ marginTop: 8, paddingLeft: 18, lineHeight: 1.7 }}>
              {it.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    ))}
  </div>
);

const Education = ({
  formal,
  certifications,
  learning,
}: {
  formal?: { degree: string; institution: string; period: string };
  certifications?: string[];
  learning?: string[];
}) => (
  <div style={{ display: "grid", gap: 24 }}>
    {formal ? (
      <div
        style={{
          background: "#141416",
          border: "1px solid #2a2b31",
          borderRadius: 12,
          padding: 16,
        }}
      >
        <div style={{ color: "#F5F547", fontWeight: 700, marginBottom: 6 }}>
          Formal Education
        </div>
        <div style={{ fontWeight: 700 }}>{formal.degree}</div>
        <div style={{ opacity: 0.85, marginTop: 2 }}>{formal.institution}</div>
        <div style={{ opacity: 0.7, fontSize: 13, marginTop: 2 }}>{formal.period}</div>
      </div>
    ) : null}
    {certifications && certifications.length ? (
      <div
        style={{
          background: "#141416",
          border: "1px solid #2a2b31",
          borderRadius: 12,
          padding: 16,
        }}
      >
        <div style={{ color: "#F5F547", fontWeight: 700, marginBottom: 8 }}>
          Certifications
        </div>
        <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.8 }}>
          {certifications.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>
      </div>
    ) : null}
    {learning && learning.length ? (
      <div
        style={{
          background: "#141416",
          border: "1px solid #2a2b31",
          borderRadius: 12,
          padding: 16,
        }}
      >
        <div style={{ color: "#F5F547", fontWeight: 700, marginBottom: 8 }}>
          Learning Focus Areas
        </div>
        <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.8 }}>
          {learning.map((l, i) => (
            <li key={i}>{l}</li>
          ))}
        </ul>
      </div>
    ) : null}
  </div>
);

const ContactCTA = ({ contact }: { contact: Contact }) => (
  <div
    style={{
      display: "grid",
      gap: 16,
    }}
  >
    <div
      style={{
        display: "grid",
        gap: 16,
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      }}
    >
      <div
        style={{
          background: "#141416",
          border: "1px solid #2a2b31",
          borderRadius: 12,
          padding: 16,
        }}
      >
        <div style={{ color: "#F5F547", fontWeight: 700, marginBottom: 6 }}>
          Email
        </div>
        <a href={`mailto:${contact.email}`} style={{ color: "#e8e8ea" }}>
          {contact.email}
        </a>
      </div>
      <div
        style={{
          background: "#141416",
          border: "1px solid #2a2b31",
          borderRadius: 12,
          padding: 16,
        }}
      >
        <div style={{ color: "#F5F547", fontWeight: 700, marginBottom: 6 }}>
          Phone
        </div>
        <div>{contact.phone}</div>
      </div>
      <div
        style={{
          background: "#141416",
          border: "1px solid #2a2b31",
          borderRadius: 12,
          padding: 16,
        }}
      >
        <div style={{ color: "#F5F547", fontWeight: 700, marginBottom: 6 }}>
          Location
        </div>
        <div>{contact.location}</div>
      </div>
    </div>
    <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
      {contact.links.map((l) => (
        <a
          key={l.href}
          href={l.href}
          target="_blank"
          rel="noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "10px 14px",
            borderRadius: 8,
            background: "#F5F547",
            color: "#0c0c0e",
            fontWeight: 700,
            textDecoration: "none",
            border: "1px solid #dcdc2a",
          }}
        >
          {l.label}
        </a>
      ))}
    </div>
  </div>
);

export default function SectionsRenderer({ data }: { data: SectionsData }) {
  return (
    <>
      {data.sections.map((sec) => {
        if (sec.id === "journey" && sec.items) {
          return (
            <Section key={sec.id} title={sec.title} dark>
              <Journey items={sec.items} />
            </Section>
          );
        }
        if (sec.id === "expertise" && sec.columns) {
          return (
            <Section key={sec.id} title={sec.title} dark>
              <Expertise columns={sec.columns} />
            </Section>
          );
        }
        if (sec.id === "ai" && sec.bullets) {
          return (
            <Section key={sec.id} title={sec.title} dark>
              <AIDevelopment bullets={sec.bullets} image={sec.image} />
            </Section>
          );
        }
        if (sec.id === "spotlight" && sec.arrows) {
          return (
            <Section key={sec.id} title={sec.title} dark>
              <Spotlight arrows={sec.arrows} note={sec.note} />
            </Section>
          );
        }
        if (sec.id === "leadership" && sec.counters) {
          return (
            <Section key={sec.id} title={sec.title} dark>
              <Counters counters={sec.counters} />
            </Section>
          );
        }
        if (sec.id === "principles" && sec.cards) {
          return (
            <Section key={sec.id} title={sec.title} dark>
              <PrincipleCards cards={sec.cards} />
            </Section>
          );
        }
        if (sec.id === "experience" && sec.timeline) {
          return (
            <Section key={sec.id} title={sec.title} dark>
              <ExperienceTimeline items={sec.timeline} />
            </Section>
          );
        }
        if (sec.id === "education") {
          return (
            <Section key={sec.id} title={sec.title} dark>
              <Education
                formal={sec.formal}
                certifications={sec.certifications}
                learning={sec.learning}
              />
            </Section>
          );
        }
        if (sec.id === "connect" && sec.contact) {
          return (
            <Section key={sec.id} title={sec.title} dark>
              <ContactCTA contact={sec.contact} />
            </Section>
          );
        }
        return null;
      })}
    </>
  );
}
