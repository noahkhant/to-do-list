import React from "react";
import "../styles/App.css";

const List = ({ tasks, toggleTask }) => {
  return (
    <table>
      <thead>
        <tr>
          <th className="list_check">Task</th>
          <th>Completed</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, index) => (
          <tr key={index}>
            <td className="list_check">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(index)}
                className="list_check_box"
              />
            </td>
            <td
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}>
              {task.text}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default List;
