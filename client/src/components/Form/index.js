import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function Form(props) {
  return (
    <div>
      <form className="search">
        <div className="form-group">
          <label htmlFor="doctors"></label>
          <input
            value={props.zipcode}
            onChange={props.handleInputChange}
            name="doctor"
            type="text"
            className="form-control"
            placeholder="type your 5-digits zipcode"
            id="doctor"
          />
          <button
            type="submit"
            onClick={props.handleFormSubmit}
            className="waves-effect waves-light btn blue darken-3"
          >
            <b>Submit</b>
          </button>
        </div>
      </form>
    </div>
  );
}
export default Form;
