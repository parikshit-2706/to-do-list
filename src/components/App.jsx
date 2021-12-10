import React, { useState } from "react";

function App() {
  const [note, setNote] = useState("");
  const [array, setArray] = useState([]);

  const handleChange = (event) => {
    const newNote = event.target.value;
    setNote(newNote);
  };

  const addTodo = (prevValue) => {
    setArray((prevValue) => {
      return [...prevValue, note];
    });
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={note} />
        <button onClick={addTodo}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {array.map((todoItem) => {
            return <li> {todoItem} </li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
