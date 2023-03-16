import React from "react";

const styles = {
  h2: {
    textAlign: "center",
  },
  link: {
    color: "#0000FF",
  },
  space: {
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  h3: {
    paddingTop: "0.75rem",
  },
};

export default function Resume() {
  return (
    <div style={styles.space}>
      <h2 style={styles.h2}>Resume</h2>

      <h3 style={styles.h3}>Technical Skills</h3>
      <p>
        <section></section>
        <h4>Front-End</h4>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>JQuery</li>
          <li>Bootstrap</li>
          <li>React</li>
          <li>Responsive Design</li>
          <li>MySQL</li>
          <li>Sequelize</li>
          <li>MongoDB</li>
          <li>Mongoose</li>
          <li>Express</li>
          <li>Node</li>
          <li>APIs</li>
          <li>GraphQL</li>
        </ul>
      </p>

      <h3 style={styles.h3}>Work Experience</h3>
      <p>
        <h4>Photographer</h4>
        <h5>Nicks Photo Studio</h5>
        (6/2018 – 1/2020)
        <ul>
          <li>
            In my capacity as a professional photographer, I had the privilege
            to work with a vast array of individuals representing a wide range
            of demographics, including different age groups, cultural
            backgrounds, and socioeconomic strata. My job entailed capturing the
            essence of people's personalities, emotions, and experiences through
            the lens of my camera, and I had the honor of witnessing and
            documenting numerous special moments and memories.
          </li>
        </ul>
      </p>
      <p>
        <h4>Marketing Manager</h4>
        <h5>Ezecomm Distribution</h5>
        (7/2021- 7/2023)
        <ul>
          <li>
            As a Marketing Manager, I played a pivotal role in supporting a
            small start-up distribution company in expanding its reach and
            attracting the attention of major manufacturers and wholesalers. To
            achieve this objective, I employed a comprehensive approach that
            included developing and executing strategic marketing plans tailored
            to the unique needs and goals of the company. Through targeted
            campaigns that focused on product differentiation, market
            positioning, and brand awareness, I was able to generate greater
            interest in the company and its offerings, ultimately leading to
            increased sales and revenue. Working closely with key stakeholders
            within the company, I provided guidance and direction in various
            areas, including market research, competitive analysis, and customer
            engagement. As a result of these efforts, the distribution company
            was able to establish a stronger foothold in the industry, gaining
            recognition and credibility among industry leaders and stakeholders.
          </li>
        </ul>
      </p>
      <h3 style={styles.h3}>Education</h3>
      <p>
        <h4>Coding Bootcamp Certificate of Completion</h4>
        University of Washington Professional & Continuing Education, Seattle,
        WA
      </p>
      <p>
        <h4>High school diploma(5/2014)</h4>
        Somerset Academy Pembroke Pines Florida
      </p>
    </div>
  );
}
