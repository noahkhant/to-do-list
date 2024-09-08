import React, { useState } from "react";
import AddTasks from "./AddTasks";
import List from "./List";
import "../styles/App.css";
import logo from "../assets/to-do-list.png";

const MainBox = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { text: task, completed: false }]);
  };

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const date = new Date();
  const today = `${date.getFullYear()}/${String(date.getMonth() + 1).padStart(
    2,
    "0"
  )}/${String(date.getDate()).padStart(2, "0")}`;

  return (
    <div className="main-place">
      <div className="header-row">
        <div className="logo">
          <img
            src={logo}
            alt="Description of the image"
            style={{ width: "100px", height: "auto" }}
          />
        </div>
        <h2 className="head">To Do List For Today</h2>
        <div className="today">
          <h1>{today}</h1>
        </div>
      </div>
      <AddTasks addTask={addTask} />
      <br />
      <List tasks={tasks} toggleTask={toggleTask} />
    </div>
  );
};

export default MainBox;
