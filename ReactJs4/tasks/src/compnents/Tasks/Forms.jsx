import React from "react";

export const TaskForm = (props) => {
  return (
    <form className="from">
      <div className="form-group">
        <label htmlFor="title"> Title </label>
        <input
          type="text"
          className="form-control"
          id="newTaskTitle"
          value={props.newTaskTitle}
          onChange={props.newTaskTitleOnChangeHandle}
        />
      </div>
      <div className="form-group">
        <label htmlFor="title">
          sub-tasks :
          <button
            className="btn btn-info m-2"
            type="button" // to prevent instant refresh on button click, other way to use prevent default
            onClick={props.addSubTaskOnClickHandle}
            onChange={props.newTaskTitleOnChangeHandle}
          >
            +
          </button>
        </label>
        {props.subTasksInputs.map((input, index) => (
          <div className="row mb-3" key={input.id}>
            <input
              type="text"
              value={input.title}
              //   id={`title-${index}`}
              data-index={index}
              type="text"
              className="col-10 form-control sub-tasks mb-1"
              onChange={props.subTaskInputOnChange}
            />
            {props.subTasksInputs.length > 1 ? (
              <button
                input-row={input.id} // custom attribute
                className="btn btn-danger"
                onClick={props.removeSubTaskHandle}
                type="button"
              >
                -
              </button>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
      <div className="text-center">
        <button className="btn btn-success" onClick={props.addNewTaskOnSubmit}>
          save
        </button>
      </div>
    </form>
  );
};
