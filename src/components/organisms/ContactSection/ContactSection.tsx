import SectionLabel from "@/components/atoms/SectionLabel/SectionLabel";
import Button from "@/components/atoms/Button/Button";
import SocialLink from "@/components/molecules/SocialLink/SocialLink";
import { siteConfig, socialLinks } from "@/data/content";
import styles from "./ContactSection.module.css";

export default function ContactSection() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <SectionLabel index="02" label="Contact" />
        <h2 className={styles.heading}>Get in touch</h2>
        <p className={styles.subtext}>
          Have a project in mind or just want to say hello? I&apos;d love to
          hear from you.
        </p>
        <div className={styles.cta}>
          <Button
            href={`mailto:${siteConfig.email}`}
            variant="primary"
          >
            Say Hello
          </Button>
          <Button
            href={siteConfig.linkedin}
            variant="secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Button>
        </div>
        <div className={styles.social}>
          {socialLinks.map((link) => (
            <SocialLink key={link.label} link={link} />
          ))}
        </div>
      </div>
    </section>
  );
}
