import React, { useState } from "react";

import { validateEmail } from "../../utils/helpers";

const styles = {
  h2: {
    textAlign: "center",
  },
  form: {
    textAlign: "center",
  },
  email: {
    textAlign: "center",
    color: "#0000FF",
  },
  input: {
    margin: "0.5rem",
  },
  inputa: {
    height: "4rem",
  },
  form: {
    textAlign: "center",
    marginTop: "150px ",
    borderWidth: "1px",
    borderColor: "black",
    borderRadius: "20px",
    borderStyle: "solid",
    width: "30%",
    marginLeft: "35%",
  },
  button: {
    color: "#fff",
    backgroundColor: "blue",
    border: "none",
    borderRadius: "20px",
    padding: "8px",
    width: "120px",
  },
};

function Form() {
  const [email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "Name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      alert("Email is Invalid");
      return;
    }

    if (!Name) {
      alert("Field is Required");
      return;
    }

    if (!message) {
      alert("Field is Required");
      return;
    }

    if (email || Name || message) {
      setSuccessMessage("Form Submitted Successfully");
      return;
    }

    setName("");
    setMessage("");
    setEmail("");
  };

  return (
    <div style={styles.form}>
      <h2 style={styles.h2}>Contact</h2>
      <div style={styles.email}>
        <a href="mailto:ahergert24@hotmail.com">brandmckie@gmail.com</a>
      </div>
      <form
        action="mailto:ahergert24@hotmail.com"
        method="post"
        encType="text/plain"
        className="form"
      >
        <div style={styles.input}>
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="email"
            required
          />
        </div>
        <div style={styles.input}>
          <input
            value={Name}
            name="Name"
            onChange={handleInputChange}
            type="text"
            placeholder="name"
            required
          />
        </div>
        <div style={styles.input}>
          <input
            style={styles.inputa}
            value={message}
            name="message"
            onChange={handleInputChange}
            type="message"
            placeholder="message"
            required
          />
        </div>
        <div>
          <button
            type="button"
            style={styles.button}
            onClick={handleFormSubmit}
          >
            Submit
          </button>
        </div>
      </form>
      {successMessage && (
        <div style={styles.form}>
          <p className="success-text">{successMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Form;
