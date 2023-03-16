import React from "react";
import Github from "../img/github.png";
import LinkedIn from "../img/linkedin.png";
import Post from "../img/twitter.png";

const styles = {
  icons: {
    borderRadius: "25%",
    filter: "opacity(100%)",
    margin: "5px",
    maxHeight: "50px",
    maxWidth: "50px",
  },
  twitterIcon: {
    borderRadius: "25%",
    filter: "opacity(100%)",
    margin: "5px",
    maxHeight: "50px",
    maxWidth: "50px",
  },
  footer: {
    marginTop: "200px ",
  },
};

function Footer() {
  return (
    <footer style={styles.footer} className="text-center">
      <div className="container p-4">
        <section className="mb-4">
          <a
            href="https://www.linkedin.com/in/brandon-mckie-11882a218/"
            target="blank"
          >
            <img style={styles.icons} src={LinkedIn} alt="linkedin icon" />
          </a>
          <a href="https://github.com/Brandonmckie" target="blank">
            <img style={styles.icons} src={Github} alt="github icon" />
          </a>
          <a href="https://twitter.com/Lon3lyStarr" target="blank">
            <img style={styles.twitterIcon} src={Post} alt="post icon" />
          </a>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
