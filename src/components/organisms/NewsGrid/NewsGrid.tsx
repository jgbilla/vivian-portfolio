import SectionLabel from "@/components/atoms/SectionLabel/SectionLabel";
import NewsCard from "@/components/molecules/NewsCard/NewsCard";
import { newsArticles } from "@/data/content";
import styles from "./NewsGrid.module.css";

export default function NewsGrid() {
  return (
    <section id="news" className={styles.section}>
      <div className={styles.container}>
        <SectionLabel index="01" label="News Features" />
        <div className={styles.header}>
          <h2 className={styles.heading}>News Features</h2>
          <p className={styles.subtext}>
            Recent articles and features highlighting my work
          </p>
        </div>
        <div className={styles.grid}>
          {newsArticles.map((article, index) => (
            <NewsCard key={article.id} article={article} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
