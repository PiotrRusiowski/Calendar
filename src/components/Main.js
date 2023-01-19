import React from "react";
import AddTask from "./Tasks/Add/AddTask";
import { TasksConnectToStore } from "./Tasks/TasksConnectToStore";
import { AddTaskConnectToStore } from "./Tasks/Add/AddTaskConnectToStore";
import Calendar from "./Calendar";
import Example from "./Tasks/Cal2";
const Main = () => {
  return (
    <div>
      <Calendar />
      <Example />
      {/*<h1>Main</h1>*/}
      {/*<AddTaskConnectToStore />*/}
      {/*<TasksConnectToStore />*/}
    </div>
  );
};

export default Main;
