import { connect } from "react-redux";
import { createTask } from "../../../Action";
import AddTask from "./AddTask";

const mapDispatchToProps = { createTask };
export const AddTaskConnectToStore = connect(null, mapDispatchToProps)(AddTask);
