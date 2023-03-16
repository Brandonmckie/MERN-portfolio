import React from "react";
import TechBlog from "../../img/cyproproject.png";
import SocailMedia from "../../img/socailmedia.png";
import EmployeeTracker from "../../img/employee_tracker.png";
import DreamHome from "../../img/LoggedIn.jpeg";

import "../../style/portfolio.css";

const styles = {
  h2: {
    textAlign: "center",
  },
  space: {
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
  },
  text: {
    fontSize: "10px",
  },
  header: {
    textAlign: "center",
    paddingBottom: "0.15rem",
  },
  repo: {
    textAlign: "center",
    color: "#0000FF",
    paddingBottom: "0.15rem",
  },
};

export default function Portfolio() {
  return (
    <div>
      <h2 style={styles.h2}>Portfolio</h2>
      <div className="container">
        <div className="row justify-content-center">
          <section className="card col-sm-4 p-0 m-2">
            <a
              href="https://github.com/bulkacity/DreamHomeApp_temp"
              target="blank"
            >
              <img
                className="card-img-top"
                src={DreamHome}
                alt="screenshot of curriculum corner"
              />
              <header>
                <h3 style={styles.header}>Dream Home App</h3>
              </header>
            </a>
            <a
              style={styles.repo}
              href="https://github.com/bulkacity/DreamHomeApp_temp"
              target="blank"
            >
              GitHub Repository
            </a>
            <p style={styles.space}>
              This is a website tailored to individuals and families that are in
              the beginning steps of their home-buying process. The site allows
              users to browse through homes in and around the South Florida area
              once they have registered or logged into their online account.
            </p>
          </section>

          <section className="card col-sm-4 p-0 m-2">
            <a
              href="https://github.com/Brandonmckie/Employee-Tracker"
              target="blank"
            >
              <img
                className="card-img-top"
                src={EmployeeTracker}
                alt="screenshot of employee tracker on command line showing list of employees"
              />
              <header>
                <h3 style={styles.header}>Employee Tracker</h3>
              </header>
            </a>
            <a
              style={styles.repo}
              href="https://github.com/Brandonmckie/Employee-Tracker"
              target="blank"
            >
              GitHub Repository
            </a>
            <p style={styles.space}>
              This is an employee tracker database created in the UW Coding
              Bootcamp. It allows users to input departments, roles, and
              employees, update an employee's role, and view a table of
              departments, roles, and employees.
            </p>
          </section>
        </div>

        <div className="row justify-content-center">
          <section className="card col-sm-4 p-0 m-2">
            <a
              href="https://github.com/Brandonmckie/-NoSQL-Social-Network-API"
              target="blank"
            >
              <img
                className="card-img-top"
                src={SocailMedia}
                alt="screenshot of Insomnia software running the social network API. Shows list of users"
              />
              <header>
                <h3 style={styles.header}>Social Media API</h3>
              </header>
            </a>
            <a
              style={styles.repo}
              href="https://github.com/Brandonmckie/-NoSQL-Social-Network-API"
              target="blank"
            >
              GitHub Repository
            </a>
            <p style={styles.space}>
              This is a social network api back-end database created in the UW
              Coding Bootcamp. This is a command line application that utilizes
              mongoose, express, and moment to view, create, update, and delete
              data from the database using Insomnia or MongoDB Compass.
            </p>
          </section>

          <section className="card col-sm-4 p-0 m-2">
            <a
              href="https://ancient-citadel-20743.herokuapp.com/"
              target="blank"
            >
              <img
                className="card-img-top"
                src={TechBlog}
                alt="screenshot of tech blog website showing rows of comments on homepage"
              />
              <header>
                <h3 style={styles.header}>Crypto App</h3>
              </header>
            </a>
            <a
              style={styles.repo}
              href="https://brandonmckie.github.io/Project-One-Crypto-NFT/"
              target="blank"
            >
              GitHub Repository
            </a>
            <p style={styles.space}>Cryptocurrency and nft project.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
