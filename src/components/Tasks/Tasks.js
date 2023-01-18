import React, { useEffect } from "react";
import TaskItem from "./TaskItem";
import useRestAPI from "../../hooks/useRestApi";

const Tasks = (props) => {
  const { getAll } = useRestAPI();
  useEffect(() => {
    props.fetchTasks([]);
    getAll().then((tasks) => props.fetchTasks(tasks.data));
  }, []);
  console.log(props.tasks);
  return (
    <ul className="list-unstyled">
      {props.tasks.map(({ id, attributes }) => (
        <TaskItem key={id} title={attributes.title} />
      ))}
    </ul>
  );
};

export default Tasks;
