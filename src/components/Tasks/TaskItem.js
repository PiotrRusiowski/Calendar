const TaskItem = ({ title }) => (
  <li className="media">
    <div className="media-body mb-2 p-2 border">
      <h5>{title}</h5>
    </div>
  </li>
);
export default TaskItem;
