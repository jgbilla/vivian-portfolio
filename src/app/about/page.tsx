import type { Metadata } from "next";
import MainTemplate from "@/components/templates/MainTemplate/MainTemplate";
import { siteConfig } from "@/data/content";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: `About — ${siteConfig.name}`,
  description: siteConfig.description,
};

export default function About() {
  return (
    <MainTemplate>
      <section className={styles.about}>
        <div className={styles.container}>
          <p className={styles.label}>About</p>
          <h1 className={styles.name}>{siteConfig.name}</h1>
          <p className={styles.role}>{siteConfig.role}</p>
          <div className={styles.bio}>
            <p>{siteConfig.description}</p>
            <p className={styles.placeholder}>
              More details coming soon. In the meantime, feel free to connect
              with me on{" "}
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </MainTemplate>
  );
}
