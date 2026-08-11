import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          {/* Subtle gradient overlay to match the logo vibe */}
          <div className={styles.gradientOverlay}></div>
        </div>
        
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            <span className={styles.brushText}>Ride.</span>
            <span className={styles.gothicText}>Germanic</span>
          </h1>
          <div className={styles.germanFlagLine}></div>
          <p className={styles.subtitle}>
            L'excellence automobile allemande. Puissance, prestige et technologie de pointe.
          </p>
          <div className={styles.actionButtons}>
            <Link href="/vehicules" className={styles.primaryButton}>
              Découvrir la flotte
            </Link>
            <Link href="/contact" className={styles.secondaryButton}>
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
