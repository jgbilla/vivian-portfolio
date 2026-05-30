"use client";

import Link from "next/link";
import styles from "./NavLink.module.css";

interface NavLinkProps {
  href: string;
  label: string;
  index: string;
  isActive?: boolean;
  onClick?: () => void;
}

export default function NavLink({
  href,
  label,
  index,
  isActive = false,
  onClick,
}: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`${styles.navLink} ${isActive ? styles.active : ""}`}
      onClick={onClick}
    >
      <span className={styles.index}>{index}</span>
      <span className={styles.label}>{label}</span>
    </Link>
  );
}
