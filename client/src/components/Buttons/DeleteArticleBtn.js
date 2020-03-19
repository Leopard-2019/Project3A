import React from "react";

let styles = {
  buttons: {
    margin: "0 20px"
  }
};

const DeleteArticleBtn = props => (
  <a
    id="delete"
    {...props}
    style={styles.buttons}
    className="waves-effect waves-light btn red darken-2 white-text"
  >
    <i className="material-icons right">delete</i>Delete Article
  </a>
);

export default DeleteArticleBtn;
