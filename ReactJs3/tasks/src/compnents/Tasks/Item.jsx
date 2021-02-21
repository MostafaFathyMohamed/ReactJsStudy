import React from "react";

export const TaskItem = (tasks) => (
  <li className="list-group-item justify-content-between">
    <div className="row">
      <div className="col">
        <h3>{tasks.task.title}</h3>
      </div>
      <div className="actions col text-right">
        <button className="btn btn-success">Done</button>
      </div>
    </div>
  </li>
);
export default TaskItem;
