import React from "react";
import "../style/header.css";

const styles = {
  navbar: {
    backgroundColor: "#000",
    display: "flex",
    justifyContent: "space-between",
    color: "white",
  },
  anchor: {
    color: "white",
  },
  navbarA: {
    color: "#fff",
    fontSize: "19px",
  },
  h1: {
    color: "#fff",
    fontSize: "20px",
  },
  padding: {
    padding: "8px",
  },
};

function Header({ currentPage, handlePageChange }) {
  return (
    <nav style={styles.navbar}>
      <header className="nav justify-content-center">
        <h1 style={styles.h1}>Brandon Mckie</h1>
      </header>
      <ul style={styles.navbarA} className="nav justify-content-center">
        <li style={styles.padding} className="nav-item">
          <a
            style={styles.anchor}
            href="#about"
            onClick={() => handlePageChange("About")}
            className={currentPage === "About" ? "nav-link-active" : "nav-link"}
          >
            About
          </a>
        </li>
        <li style={styles.padding} className="nav-item">
          <a
            style={styles.anchor}
            href="#portfolio"
            onClick={() => handlePageChange("Portfolio")}
            className={
              currentPage === "Portfolio" ? "nav-link-active" : "nav-link"
            }
          >
            Portfolio
          </a>
        </li>
        <li style={styles.padding} className="nav-item">
          <a
            style={styles.anchor}
            href="#contact"
            onClick={() => handlePageChange("Contact")}
            className={
              currentPage === "Contact" ? "nav-link-active" : "nav-link"
            }
          >
            Contact
          </a>
        </li>
        <li style={styles.padding} className="nav-item">
          <a
            style={styles.anchor}
            href="#resume"
            onClick={() => handlePageChange("Resume")}
            className={
              currentPage === "Resume" ? "nav-link-active" : "nav-link"
            }
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
