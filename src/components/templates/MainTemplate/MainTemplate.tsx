import Navbar from "@/components/organisms/Navbar/Navbar";
import Footer from "@/components/organisms/Footer/Footer";
import styles from "./MainTemplate.module.css";

interface MainTemplateProps {
  children: React.ReactNode;
}

export default function MainTemplate({ children }: MainTemplateProps) {
  return (
    <div className={styles.layout}>
      <Navbar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}
