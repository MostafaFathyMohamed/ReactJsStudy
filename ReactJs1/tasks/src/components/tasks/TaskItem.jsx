import React from 'react';
const TaskItem = () => (
    <li className="list-group-item d-flex justify-content-between">

<div className="content">
<h3 className="task-title">Task title</h3>
<p className="task=body">Description for task</p>
</div>
<div className="actions">
  <button className="btn btn-info bg-danger">
    Edit
  </button>
 <button className="toggle-done btn">
   Done
  </button>
</div>
</li>
);
export default TaskItem;