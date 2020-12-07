import React from "react";
import { connect } from "react-redux";

import { createNote } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";

const AnecdoteForm = ({ createNote, setNotification }) => {
  const create = (event) => {
    event.preventDefault();
    const content = event.target.name.value;
    event.target.name.value = "";
    event.target.name.value = "";
    createNote(content);
    setNotification(`added  note '${content}'`);
  };
  return (
    <div>
      <h3>Add anecdote</h3>
      <form onSubmit={create}>
        <input name="name"/>
        <button type="submit">create</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  createNote,
  setNotification,
}
export default connect(null, mapDispatchToProps)(AnecdoteForm)
