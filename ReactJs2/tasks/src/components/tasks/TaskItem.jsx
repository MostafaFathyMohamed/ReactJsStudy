import React from "react";

const TaskItem = ({ task }) => (
  <div className="col-md-10">
    <div className="card mt-5">
      <div className="card-body">
        <h5 className="card-title">{task.title}</h5>
        <p className="card-text">{task.description}</p>
        <button className={`btn btn-${task.isDone ? "danger" : "primary"}`}>
          {task.isDone ? "Re-open" : "arz3"}
        </button>
      </div>
    </div>
  </div>
);
export default TaskItem;
