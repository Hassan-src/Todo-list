import { useState } from "react";
import TaskCreatorModal from "../TaskCreatorModal/TaskCreatorModal";
import TaskListContent from "../TaskListContent/TaskListContent";
import TaskCreatorStarter from "../TaskCreatorStarter/TaskCreatorStarter";
import "./TaskList.css";
export default function TaskList({
  onTaskArray,
  taskArray,
  setTaskArray,
  isAdded,
  userName,
  setUserName,
  hamBtn,
  onDeleteItem,
  onDoneTask,
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [importance, setImportance] = useState("low");
  function handleOnSubmitForm(e) {
    e.preventDefault();
    const id = crypto.randomUUID();
    const task = { title, description, importance, id, done: false };
    onTaskArray(task);
    setTitle("");
    setDescription("");
    setImportance("low");
  }
  return (
    <div className="tasks-menu">
      {!isAdded && (
        <TaskCreatorStarter
          userName={userName}
          setUserName={setUserName}
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          importance={importance}
          setImportance={setImportance}
          onSubmitStarterForm={handleOnSubmitForm}
        />
      )}
      {taskArray.length > 0 && (
        <div className="task-wrapper">
          {taskArray.map((task) => (
            <TaskListContent
              key={task.id}
              id={task.id}
              done={task.done}
              title={task.title}
              description={task.description}
              importance={task.importance}
              onDeleteItem={onDeleteItem}
              onDoneTask={onDoneTask}
            />
          ))}
        </div>
      )}

      {hamBtn && (
        <TaskCreatorModal
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          importance={importance}
          setImportance={setImportance}
          onSubmitStarterForm={handleOnSubmitForm}
        />
      )}
    </div>
  );
}
