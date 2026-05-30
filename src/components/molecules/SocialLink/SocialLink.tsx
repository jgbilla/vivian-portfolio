import Image from "next/image";
import { SocialLinkData } from "@/types";
import styles from "./SocialLink.module.css";

interface SocialLinkProps {
  link: SocialLinkData;
}

export default function SocialLink({ link }: SocialLinkProps) {
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.socialLink}
      aria-label={link.label}
    >
      <Image src={link.icon} alt={link.label} width={20} height={20} />
    </a>
  );
}
