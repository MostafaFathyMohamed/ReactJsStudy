import React from "react";

import TaskItem from "./Item";

export const TaskList = ({ tasks }) => (
  <ul className="list-group">
    {tasks.map((task) => (
      <TaskItem key={task.id} task={task} />
    ))}
  </ul>
);
export default TaskList;
