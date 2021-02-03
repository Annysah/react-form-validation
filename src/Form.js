import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container">
      <form className="form-wrapper" onSubmit={handleSubmit}>
        <h2>Register Today!</h2>
        <input
          className="form-field"
          placeholder="First Name"
          name="firstName"
          value={values.firstName}
          onChange={(event) =>
            setValues({ ...values, firstName: event.target.value })
          }
        />
        {submitted && !values.firstName ? (
          <span>Please enter your first name</span>
        ) : null}
        <input
          className="form-field"
          placeholder="Last Name"
          name="lastName"
          value={values.lastName}
          onChange={(event) =>
            setValues({ ...values, lastName: event.target.value })
          }
        />
        {submitted && !values.lastName ? (
          <span>Please enter your last name</span>
        ) : null}
        <input
          className="form-field"
          placeholder="Email"
          name="email"
          value={values.email}
          onChange={(event) =>
            setValues({ ...values, email: event.target.value })
          }
        />
        {submitted && !values.email ? (
          <span>Please enter a valid email</span>
        ) : null}
        <button className="form-button">Sign up</button>
        {submitted && valid ? (
          <div className="success-message">Registration successful!</div>
        ) : null}
      </form>
    </div>
  );
}

export default Form;
