import React from "react";
import AnecdoteForm from "./components/AnecdoteForm";
import AnecdoteList from "./components/AnecdoteList";
import Notification from "./components/Notification";
import Filter from "./components/Filter";

const App = () => {
  return (
    <div>
      <h1>Anecdotes</h1>
      <AnecdoteForm />
      <Filter/>
      <AnecdoteList />
      <Notification />
    </div>
  );
};

export default App;
