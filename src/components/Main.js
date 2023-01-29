import React from "react";
import AddTask from "./Tasks/Add/AddTask";
import { TasksConnectToStore } from "./Tasks/TasksConnectToStore";
import { AddTaskConnectToStore } from "./Tasks/Add/AddTaskConnectToStore";
import Calendar from "./Calendars/Calendar";
import Routing from "../routing/Routing";
const Main = () => {
  return (
    <div>
      <Routing />
    </div>
  );
};

export default Main;
