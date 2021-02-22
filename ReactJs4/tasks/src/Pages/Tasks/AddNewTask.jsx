import React from "react";
import Tasks from "../../compnents/Tasks";
export const AddNewTask = (props) => (
  <div className="new-task">
    <Tasks.Form
      addNewTaskOnSubmit={props.addNewTaskOnSubmit}
      newTaskTitle={props.newTaskTitle}
      newTaskTitleOnChangeHandle={props.newTaskTitleOnChangeHandle}
      addSubTaskOnClickHandle={props.addSubTaskOnClickHandle}
      subTasksInputs={props.subTasksInputs}
      subTaskInputOnChange={props.subTaskInputOnChange}
      removeSubTaskHandle={props.removeSubTaskHandle}
    />
  </div>
);
export default AddNewTask;
