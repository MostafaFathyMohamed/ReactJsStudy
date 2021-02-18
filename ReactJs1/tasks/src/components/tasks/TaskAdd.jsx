import React from 'react';
const TaskAdd = () =>(
<div className="add-task">
  <form>
    <div className="form-group">
      <label htmlFor="title">Title</label>
      <input type="text" id="title" className="form-control"/>
    </div>
    <button className="btn btn-success">Save</button>
  </form>
  <br/>
  <br/>
  </div>
);
export default TaskAdd;