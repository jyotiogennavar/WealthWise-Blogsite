import clsx from "clsx";
import styles from "./Header.module.css";



function Header() {
  return (
    <div className={clsx(styles.headerBorder)}>
    <header className={clsx(styles.wrapper)}>
      <p>Logo</p>
      <nav className={clsx(styles.navList)}>
        <ul >
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">Catagories</a>
          </li>
        </ul>
      </nav>

    </header>
    </div>
  );
}

export default Header;