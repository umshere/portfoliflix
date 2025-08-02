import React from "react";

export default function About({
  intro,
  contact,
}: {
  intro: string;
  contact: { email: string; phone: string; location: string };
}) {
  return (
    <section>
      <h2>About</h2>
      <p>{intro}</p>
      <ul>
        <li>
          <a href={"mailto:" + contact.email}>{contact.email}</a>
        </li>
        <li>
          <a href={"tel:" + contact.phone.replace(/[^+\d]/g, "")}>
            {contact.phone}
          </a>
        </li>
        <li>{contact.location}</li>
      </ul>
    </section>
  );
}
