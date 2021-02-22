import React from "react";
import Tasks from "../../compnents/Tasks";
export const TaskShow = (props) => {
  const { id } = props.match.params,
    task = props.findTask(id);
  return (
    <div>
      {task ? (
        <div>
          <h1>{task && task.title}</h1>
          <ul>
            {task &&
              task.subTasks &&
              task.subTasks.map((subTask) => (
                <li>
                  <span>{subTask.title}</span>
                  <button className="btn btn-success">Done</button>
                </li>
              ))}
          </ul>
        </div>
      ) : (
        <h1>not Found</h1>
      )}
    </div>
  );
};

export default TaskShow;
