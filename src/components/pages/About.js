import React from "react";
import BrandonMckie from "../../img/emoji.png";

const styles = {
  brandonmckie: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    maxHeight: "400px",
    maxWidth: "400px",
    marginBottom: "100px",
  },
  width: {
    width: "80%",
  },
  h2: {
    textAlign: "center",
  },
  space: {
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default function About() {
  return (
    <div style={styles.space}>
      <div>
        <img style={styles.brandonmckie} src={BrandonMckie} alt="Brandon" />
      </div>
      <div style={styles.width}>
        <p>
          As an individual, I am a highly motivated and driven full-stack web
          developer, passionate about technology and dedicated to making a
          positive impact through my work. With a solid foundation in
          programming languages, I possess a proven aptitude for learning and
          adapting quickly to the demands of a fast-paced work environment. My
          primary goal is to deliver high-quality, dependable solutions, and I
          am committed to continuously enhancing my skill set and staying
          abreast of the latest technologies. Whether working collaboratively or
          independently, my focus is always on contributing to the success of
          the project and the company.
        </p>
        <p>
          I have half a decade of experince in photography, videography, graphic
          design professonally. As a photographer I have assisted bussines by
          taking high quality photos used for marketing material and brand
          representation. My time spent as a videographer I have filmed and
          edited hundreds of project for marketing, branding and educational
          perposess.
        </p>
      </div>
    </div>
  );
}
