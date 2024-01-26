import React from "react";
import "./TaskList.scss";

const TaskList = ({ tasks, onDelete }) => {
  return (
    <>
      {" "}
      <h3>Notes List</h3>
      <ul id="ul">
        {tasks.map((task) => (
          <li key={task._id} id="li">
            <p id="title">{task.title}</p>
            <p id="description">{task.description}</p>
            <p id="dueDate">{task.dueDate}</p>
            <button id="deleteButton" onClick={() => onDelete(task._id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
