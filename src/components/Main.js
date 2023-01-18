import React from "react";
import AddTask from "./Tasks/Add/AddTask";
import { TasksConnectToStore } from "./Tasks/TasksConnectToStore";
import { AddTaskConnectToStore } from "./Tasks/Add/AddTaskConnectToStore";
import Calendar from "./Calendar";
const Main = () => {
  return (
    <div>
      <Calendar />
      {/*<h1>Main</h1>*/}
      {/*<AddTaskConnectToStore />*/}
      {/*<TasksConnectToStore />*/}
    </div>
  );
};

export default Main;
