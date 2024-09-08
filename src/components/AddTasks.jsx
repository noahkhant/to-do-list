import React, { useState } from "react";
import "../styles/App.css";

const AddTasks = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(task);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit} className="addBox">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add task here!"
        className="addBoxInput"
      />
      <button type="submit" className="addBtn">
        Add Task
      </button>
    </form>
  );
};

export default AddTasks;
