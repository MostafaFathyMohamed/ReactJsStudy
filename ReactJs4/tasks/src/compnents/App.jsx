import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Layouts from "../layouts";
import AddNewTask from "../Pages/Tasks/AddNewTask";
import TaskShow from "../Pages/Tasks/TaskShow";
import Tasks from "./Tasks";
import { TaskForm } from "./Tasks/Forms";
import TaskList from "./Tasks/List";

class App extends Component {
  state = {
    newTaskTitle: "",
    subTasksInputs: [
      {
        id: 1,
        title: "",
      },
    ],
    tasks: [
      {
        id: 1,
        title: "task one",
        isDone: false,
        subTasksInputs: [
          {
            id: 1,
            title: "test",
            isDone: false,
          },

          {
            id: 2,
            title: "test 2",
            isDone: true,
          },
        ],
      },
      {
        id: 2,
        title: "task two",
        isDone: true,
        subTasksInputs: [
          {
            id: 1,
            title: " task two test",
            isDone: true,
          },

          {
            id: 2,
            title: "task two test 2",
            isDone: true,
          },
        ],
      },
    ],
  };
  addSubTaskOnClickHandle = () => {
    const newInput = {
      id: Date.now(),
      title: "",
    };
    const subTasksInputs = [...this.state.subTasksInputs, newInput]; // push in ES6
    this.setState({ subTasksInputs });
  };
  removeSubTaskHandle = (e) => {
    const rowId = e.target.getAttribute("input-row");
    const subTasksInputs = this.state.subTasksInputs.filter((input) => {
      return rowId != input.id; //this is the condition of filter applies if tue
    });
    this.setState({ subTasksInputs });
  };
  newTaskTitleOnChangeHandle = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  subTaskInputOnChange = (e) => {
    const subTasksInputs = this.state.subTasksInputs;
    console.log(e.target.value, e.target.dataset.index);
    subTasksInputs[e.target.dataset.index].title = e.target.value;
    this.setState({ subTasksInputs });
  };
  addNewTaskOnSubmit = (e) => {
    e.preventDefault();

    const newTask = {
        id: Date.now(),
        title: this.state.newTaskTitle,
        subTasks: this.state.subTasksInputs,
      },
      tasks = [...this.state.tasks, newTask];
    this.setState({ tasks });
    this.resetForm();
  };
  resetForm = () => {
    const newTaskTitle = "",
      subTasksInputs = [
        {
          id: 1,
          title: "",
        },
      ];
    this.setState({ newTaskTitle, subTasksInputs });
  };

  findTask = (taskId) => {
    const results = this.state.tasks.filter((task) => taskId == task.id);
    if (results.length > 0) {
      return results[0];
    }
    return null;
  };
  render() {
    return (
      <div>
        <Layouts.Nav />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 ">
              <Switch>
                <Route
                  path="/user/profile"
                  component={(props) => {
                    return <h1>User Profile</h1>;
                  }}
                ></Route>

                <Route path="/task/create">
                  <AddNewTask
                    addNewTaskOnSubmit={this.addNewTaskOnSubmit}
                    newTaskTitle={this.state.newTaskTitle}
                    newTaskTitleOnChangeHandle={this.newTaskTitleOnChangeHandle}
                    addSubTaskOnClickHandle={this.addSubTaskOnClickHandle}
                    subTasksInputs={this.state.subTasksInputs}
                    subTaskInputOnChange={this.subTaskInputOnChange}
                    removeSubTaskHandle={this.removeSubTaskHandle}
                  />
                </Route>
                <Route
                  path="/task/:id"
                  component={(props) => (
                    <TaskShow {...props} findTask={this.findTask} />
                  )}
                ></Route>
                <Route path="/" exact>
                  <div className="content mt-3 mb-3">
                    <Tasks.List tasks={this.state.tasks} />
                  </div>
                </Route>
                <Route path="*">
                  <h1>404PageNotFoud</h1>
                </Route>
              </Switch>
            </div>
          </div>
        </div>
        <Layouts.Footer />
      </div>
    );
  }
}
export default App;
