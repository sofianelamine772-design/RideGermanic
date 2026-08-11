import Image from 'next/image';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <header className={`${styles.header} glass-effect`}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <Link href="/">
            <Image 
              src="/logo.png" 
              alt="Ride.Germanic Logo" 
              width={200} 
              height={80} 
              className={styles.logo}
              priority
            />
          </Link>
        </div>
        
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/" className={styles.navLink}>Accueil</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/vehicules" className={styles.navLink}>Véhicules</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/services" className={styles.navLink}>Services</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/contact" className={styles.navLink}>Contact</Link>
            </li>
          </ul>
        </nav>
        
        <div className={styles.ctaContainer}>
          <Link href="/reserver" className={styles.ctaButton}>
            Réserver
          </Link>
        </div>
      </div>
    </header>
  );
}
