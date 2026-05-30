"use client";

import { useState } from "react";
import Link from "next/link";
import NavLink from "@/components/atoms/NavLink/NavLink";
import { navigation, siteConfig } from "@/data/content";
import useScrollDirection from "@/hooks/useScrollDirection";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pastHero } = useScrollDirection(80);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className={`${styles.navbar} ${pastHero ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          {siteConfig.name}
        </Link>

        <ul className={`${styles.navMenu} ${isMenuOpen ? styles.active : ""}`}>
          {navigation.map((item) => (
            <li key={item.index}>
              <NavLink
                href={item.href}
                label={item.label}
                index={item.index}
                onClick={closeMenu}
              />
            </li>
          ))}
        </ul>

        <button
          className={`${styles.hamburger} ${isMenuOpen ? styles.active : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>
      </div>
    </nav>
  );
}
