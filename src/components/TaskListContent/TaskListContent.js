import Button from "../Button/Button";
import "./TaskListContent.css";
export default function TaskListContent({
  title,
  description,
  importance,
  done,
  onDeleteItem,
  id,
  onDoneTask,
}) {
  return (
    <div className="created-task">
      <div className={`task-done ${done ? "" : "hidden"}`}></div>
      <h1 className={`task-done-text ${done ? "" : "hidden"}`}>Done!</h1>
      <div className="check-box-div">
        <input
          type="checkbox"
          className="task-check-box"
          onChange={() => onDoneTask(id)}
        />
        <span></span>
      </div>
      <div className="task-title">
        <h2>{title}</h2>
        <h3>{importance}</h3>
      </div>
      <div className="task-description">
        <p>{description}</p>
      </div>
      <div className="delete-task-div">
        <Button className={"delete-task"} onClick={() => onDeleteItem(id)}>
          &times;
        </Button>
      </div>
    </div>
  );
}
