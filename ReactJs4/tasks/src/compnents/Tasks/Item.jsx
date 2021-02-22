import React from "react";
import { Link } from "react-router-dom";

export const TaskItem = (props) => (
  <li className="list-group-item justify-content-between">
    <div className="row">
      <div className="col">
        <h3>
          <Link to={`/task/${props.task.id}`}>{props.task.title}</Link>
        </h3>
      </div>
      <div className="actions col text-right">
        <button className="btn btn-success">Done</button>
      </div>
    </div>
  </li>
);
export default TaskItem;
