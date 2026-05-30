import SocialLink from "@/components/molecules/SocialLink/SocialLink";
import { siteConfig, socialLinks } from "@/data/content";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} {siteConfig.name}
        </p>
        <div className={styles.social}>
          {socialLinks.map((link) => (
            <SocialLink key={link.label} link={link} />
          ))}
        </div>
      </div>
    </footer>
  );
}
