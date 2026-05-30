import styles from "./SectionLabel.module.css";

interface SectionLabelProps {
  index: string;
  label: string;
}

export default function SectionLabel({ index, label }: SectionLabelProps) {
  return (
    <div className={styles.sectionLabel}>
      <span className={styles.index}>{index}</span>
      <span className={styles.divider}>/</span>
      <span className={styles.label}>{label}</span>
    </div>
  );
}
