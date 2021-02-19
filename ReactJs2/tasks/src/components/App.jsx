import React, { Component, Fragment } from "react";
import "../assets/scss/app.scss";
import Nav from "../layouts/Nav";
import TaskItem from "./tasks/TaskItem";
class App extends Component {
  state = {
    tasks: [
      {
        id: 1,
        title: "Tasks Title 1",
        description: "Description",
        isDone: true,
        createdAt: "18-07-2020",
      },
      {
        id: 2,
        title: "Tasks Title 2",
        description: "Description 2",
        isDone: false,
        createdAt: "19-07-2020",
      },
      {
        id: 3,
        title: "Tasks Title 3",
        description: "Description",
        isDone: true,
        createdAt: "20-07-2020",
      },
    ],
    newTask: {
      id: "",
      description: "",
      isDone: false,
      createdAt: "",
    },
    isAddNewTask: false,
  };

  isAddNewTaskHandele = () => {
    this.setState({
      isAddNewTask: !this.state.isAddNewTask,
    });
    console.log("isAddNewTaskHandele");
  };

  titleOnChangeHandle = (e) => {
    this.setState({
      newTask: {
        title: e.target.value,
      },
    });
  };
  OnChangeHandle = (e) => {
    const newTask = this.state.newTask;

    newTask[e.target.id] = e.target.value;
    this.setState({ newTask: newTask });
  };
  onSubmitHandle = (e) => {
    e.preventDefault();
    const tasks = this.state.tasks;
    tasks.push(this.state.newTask);
    console.log(this.state.newTask);
    this.setState({ tasks: tasks });
    this.isAddNewTaskHandele();
  };
  render() {
    return (
      <Fragment>
        <Nav />
        <div className="container">
          <h1>Tasks</h1>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <button
                className={`btn btn-success ${
                  this.state.isAddNewTask ? "d-none" : ""
                }`}
                onClick={this.isAddNewTaskHandele}
              >
                Add new
              </button>
              <form onSubmit={this.onSubmitHandle}>
                <div
                  className={`form w-100 ${
                    this.state.isAddNewTask ? "" : "d-none"
                  }`}
                >
                  <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                      type="text"
                      id="title"
                      className="form-control"
                      value={this.state.newTask.id}
                      onChange={this.OnChangeHandle}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea
                      id="description"
                      cols="30"
                      rows="10"
                      className="form-control"
                      value={this.state.newTask.description}
                      onChange={this.OnChangeHandle}
                    ></textarea>
                  </div>
                  <div className="text-cernter  ">
                    <button className="btn btn-success m-2">Save</button>
                    <button
                      type="button"
                      className="btn btn-warning m-2"
                      onClick={this.isAddNewTaskHandele}
                    >
                      Close Here
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="row justify-content-center mb-5">
            {this.state.tasks.map((task) => (
              <TaskItem key={task.id} task={task} />
            ))}
          </div>
        </div>
      </Fragment>
    );
  }
} //React.Componenet
export default App;
