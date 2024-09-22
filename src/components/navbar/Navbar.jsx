import React from 'react';
import styles from './Navbar.module.css';

export default function Navbar({ heroRef, projectsRef, experienceRef }) {
  function scroll(ref) {
    if (!ref.current) return;
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <nav className={styles.navbar}>
      <button>Home</button>
      <button>Projects</button>
      <button>Experience</button>
    </nav>
  )
}