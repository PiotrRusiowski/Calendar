import { Routes, Route } from "react-router-dom";
import Calendar from "../components/Calendars/Calendar";
import AddTask from "../components/Tasks/Add/AddTask";
import { routes } from "./routes";
const Routing = () => (
  <Routes>
    <Route path="/" element={<Calendar />} />
    <Route path={routes.addTask} element={<AddTask />} />

    {/*<Route path="*" element={<NotFound />} />*/}
  </Routes>
);
export default Routing;
