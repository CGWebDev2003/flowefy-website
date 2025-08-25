import { makeStyles } from "@griffel/react";

const useClasses = makeStyles({
  notFoundSection: {
    height: "100vh",
    width: "100vw",
    backgroundColor: "var(--bg-color)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    boxSizing: "border-box",
  },
  notFoundTitle: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: "12rem",
    lineHeight: "10rem",
    fontStyle: "italic",
    fontWeight: "900",
    color: "var(--primary)",

    "@media (max-width: 900px)": {
      fontSize: "8rem",
    },
  },
  notFoundText: {
    textAlign: "center",
    maxWidth: "80%",
  },
  notFoundBackButton: {
    marginTop: "2rem",
    textDecoration: "none",
    padding: ".8rem 2rem",
    borderRadius: "8px",
    color: "white",
    backgroundColor: "var(--accent)",
    fontWeight: "500",
    transition: "all 0.4s ease-in-out",
    ':hover': {
      backgroundColor: "var(--accent-hover)",
    },
  },
});

export default function NotFound() {
  const styles = useClasses();

  return (
    <div className={styles.notFoundSection}>
      <h1 className={styles.notFoundTitle}>404</h1>
      <h2 className={styles.notFoundText}>Oh nein! Diese Seite wurde nicht gefunden.</h2>
      <a className={styles.notFoundBackButton} href="/">Zur Startseite <i className="bi bi-arrow-up-right"></i></a>
    </div>
  );
}
