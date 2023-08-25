import Link from 'next/link';
import styles from "../Navbar/Navbar.module.css"
import "src/app/globals.css"

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarList}>
        <li className={styles.navbarItem}>
          <Link className={styles.navbarLink} href="/">
            <span>Home</span>
          </Link>
        </li>
        <li className={styles.navbarItem}>
          <Link className={styles.navbarList} href="/gallery">
            <span>Gallery</span>
          </Link>
        </li>
        <li className={styles.navbarItem}>
          <Link className={styles.navbarList} href="/about">
            <span>About us</span>
          </Link>
        </li>
        <li className={styles.navbarItem}>
          <Link className={styles.navbarList} href="/contact">
            <span>Contact</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
