import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <p className={styles.author}>
        Made with 🧡 by{" "}
        <span className={styles.link}>
          <a
            href="https://github.com/hackelite01"
            target="_blank"
            rel="noreferrer"
          >
            Mayank Rajput 👻
          </a>
        </span>
      </p>
    </footer>
  );
};

export default Footer;
