import Button from "@/components/atoms/Button/Button";
import { siteConfig } from "@/data/content";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.tagline}>{siteConfig.tagline}</h1>
        <p className={styles.role}>{siteConfig.role}</p>
        <div className={styles.cta}>
          <Button
            href={siteConfig.linkedin}
            variant="primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect With Me
          </Button>
        </div>
      </div>
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
