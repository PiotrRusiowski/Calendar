import React from "react";
import AddTask from "./Tasks/Add/AddTask";
import { TasksConnectToStore } from "./Tasks/TasksConnectToStore";
import { AddTaskConnectToStore } from "./Tasks/Add/AddTaskConnectToStore";
import Calendar from "./Calendars/Calendar";
import Calendar2 from "./Calendars/Calendar2";
const Main = () => {
  return (
    <div>
      <Calendar2 />
      <Calendar />
      {/*<h1>Main</h1>*/}
      {/*<AddTaskConnectToStore />*/}
      {/*<TasksConnectToStore />*/}
    </div>
  );
};

export default Main;
