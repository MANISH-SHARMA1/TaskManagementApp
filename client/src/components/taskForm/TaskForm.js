import React, { useState } from "react";
import "./TaskForm.scss";

function TaskForm({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description, dueDate });
    setTitle("");
    setDescription("");
    setDueDate("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form">
        <div className="inputs">
          <p>Title</p>
          <input
            id="input1"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="inputs">
          <p>Description</p>
          <textarea
            id="input2"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="inputs">
          <p>Due Date</p>
          <input
            id="input3"
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
        <button type="submit" id="addButton">
          Add Task
        </button>
      </div>
    </form>
  );
}

export default TaskForm;
