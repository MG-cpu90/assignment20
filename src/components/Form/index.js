import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function Form(props) {
  return (

    <form
      className="padding-2 margin-2"
      id="contactForm"
      action="mailto:massimo@massimoguida.com"
      method="post"
      enctype="text/plain"
    >
      <div className="form-group">
        <label for="exampleFormControlInput1 padding-2 margin-2">Name:</label>
        <input
          type="text"
          className="form-control"
          id="nameInput"
          placeholder="Full Name"
          name="name"
        />
      </div>
      <div className="form-group padding-2 margin-2">
        <label for="exampleFormControlInput1 padding-2 margin-2">
          E-mail address:
        </label>
        <input
          type="email"
          className="form-control"
          id="emailInput"
          placeholder="name@example.com"
          name="email"
        />
      </div>
      <div className="form-group padding-2 margin-2">
        <label for="exampleFormControlTextarea1 padding-2 margin-2">
          Comment:
        </label>
        <textarea
          className="form-control"
          id="textArea"
          rows="3"
          placeholder="Feel free to leave a comment!"
          name="message"
        ></textarea>
      </div>
      <div>
        <button
          type="submit"
          className="btn btn-secondary padding-2 margin-2"
          id="submitButton"
          value="Send"
          onClick={props.handleFormSubmit} 
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default Form;
