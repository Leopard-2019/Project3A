import React from "react";

const SaveNoteBtn = props => (
  <div>
    {/* {console.log(props) } */}
    <a
      id="savenote"
      {...props}
      className="waves-effect waves-light right btn-small"
    >
      <i className="material-icons right">save</i>Save Note
    </a>
  </div>
);

export default SaveNoteBtn;
