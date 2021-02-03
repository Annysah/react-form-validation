import React, { useState } from "react";
import "./Form.css";

function Form() {
  //state for the inputs
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: ""
  });

  //state for submit
  const [submitted, setSubmitted] = useState(false);
  
  //state for validating the input
  const [valid, setValid] = useState(false);
  
  //handler to prevent submitting by default
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
        //validating the first name when submitted
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
        //validating the last name when submitted
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
        //validating the email when submitted
        {submitted && !values.email ? (
          <span>Please enter a valid email</span>
        ) : null}
        <button className="form-button">Sign up</button>
        
        //validating the success message and displaying it if inputs are valid
        {submitted && valid ? (
          <div className="success-message">Registration successful!</div>
        ) : null}
      </form>
    </div>
  );
}

export default Form;
