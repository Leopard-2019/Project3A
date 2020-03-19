import React from "react";

let styles = {
  buttons: {
    margin: "0 20px"
  }
};

const AddNoteBtn = props => (
  <a
    id="note"
    {...props}
    style={styles.buttons}
    className="waves-effect waves-light btn lime darken-2 white-text"
  >
    <i className="material-icons right">note_add</i>Add Note
  </a>
);

export default AddNoteBtn;
