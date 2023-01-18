import { connect } from "react-redux";
import Tasks from "./Tasks";
import { fetchTasks } from "../../Action";

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  };
};
const mapDispatchToProps = { fetchTasks };

export const TasksConnectToStore = connect(
  mapStateToProps,
  mapDispatchToProps
)(Tasks);
