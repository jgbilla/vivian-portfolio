"use client";

import { NewsArticle } from "@/types";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import styles from "./NewsCard.module.css";

interface NewsCardProps {
  article: NewsArticle;
  index: number;
}

export default function NewsCard({ article, index }: NewsCardProps) {
  const ref = useScrollAnimation<HTMLAnchorElement>(0.15);

  return (
    <a
      ref={ref}
      href={article.link}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.card}
      style={{
        transitionDelay: `${index * 100}ms`,
        animationDelay: `${index * 100}ms`,
      }}
    >
      <div
        className={styles.imageWrapper}
        style={{ backgroundImage: `url(${article.image})` }}
      />
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h3 className={styles.title}>{article.title}</h3>
        <span className={styles.arrow}>&#8599;</span>
      </div>
    </a>
  );
}
