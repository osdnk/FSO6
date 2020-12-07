import React from "react";
import { connect } from "react-redux";
import { voteFor } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";

const AnecdoteList = ({ anecdotes, voteFor, setNotification }) => {
  const vote = (id, content) => {
    voteFor(id);
    setNotification(`you voted '${content}'`);
  };

  return anecdotes.sort((a, b) => b.votes - a.votes).map(({ id, content, votes }) => (
    <div key={id}>
      <div>{content}</div>
      <div>
        has {votes}
        <button onClick={() => vote(id, content)}>vote</button>
      </div>
    </div>
  ));
};

const mapStateToProps = state => {
  return {
    anecdotes: state.anecdotes.filter(v => v.content.toLowerCase().includes(state.filter.toLowerCase()))
  }
}

const mapDispatchToProps = {
  voteFor,
  setNotification
}

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)
