import { Routes, Route } from "react-router-dom";
import Calendar from "../components/Calendars/Calendar";
import AddTask from "../components/Tasks/Add/AddTask";
import { routs } from "./routs";
const Routing = () => (
  <Routes>
    <Route path="/" element={<Calendar />} />
    <Route path={routs.addTask} element={<AddTask />} />

    {/*<Route path="*" element={<NotFound />} />*/}
  </Routes>
);
export default Routing;
