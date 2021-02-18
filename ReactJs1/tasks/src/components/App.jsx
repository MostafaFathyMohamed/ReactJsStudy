import React from "react";
import Nav from "./layouts/Nav";
import Footer from "./layouts/Footer";
import TaskItem from "./tasks/TaskItem";
import TaskAdd from "./tasks/TaskAdd";
import TaskList from "./tasks/TaskList";

export const App = () => (
  <div>
    <Nav />
    <div className="container aaa">
      <div className="card text-center">
        <div className="card-body">
          <TaskAdd />
          <TaskList />
          <TaskAdd />
        </div>
        <Footer />
      </div>
    </div>
  </div>
);
export default App;
