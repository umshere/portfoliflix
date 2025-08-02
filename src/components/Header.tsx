'use client';
import React from 'react';
import styles from '../app/page.module.css';

export default function Header({
  name,
  headline,
  links,
}: {
  name: string;
  headline: string;
  links: { linkedin: string; github: string };
}) {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.headline}>{headline}</p>
      </div>
      <nav className={styles.links}>
        <a href={links.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href={links.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <button
          className={styles.themeToggle}
          onClick={() => document.documentElement.classList.toggle('dark')}
        >
          Theme
        </button>
      </nav>
    </header>
  );
}
