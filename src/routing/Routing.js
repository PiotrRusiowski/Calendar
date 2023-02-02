import { Routes, Route } from "react-router-dom";
import Calendar from "../components/Calendars/Calendar";
import AddTask from "../components/Tasks/Add/AddTask";
import { routes } from "./routes";
import { AddTaskConnectToStore } from "../components/Tasks/Add/AddTaskConnectToStore";
const Routing = () => (
  <Routes>
    <Route path="/" element={<Calendar />} />
    <Route path={routes.addTask} element={<AddTaskConnectToStore />} />

    {/*<Route path="*" element={<NotFound />} />*/}
  </Routes>
);
export default Routing;
