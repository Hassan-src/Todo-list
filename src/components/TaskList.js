import { useState } from "react";
import TaskCreatorModal from "./TaskCreatorModal";
import TaskListContent from "./TaskListContent";
import TaskCreatorStarter from "./TaskCreatorStarter";
import "../styles/TaskList.css";
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
  // Form submit functionality
  function handleOnSubmitForm(e) {
    e.preventDefault();
    // Generating a randaom id for each task
    const id = crypto.randomUUID();
    // Array structure
    const task = { title, description, importance, id, done: false };
    onTaskArray(task);
    // Reseting after passing the array
    setTitle("");
    setDescription("");
    setImportance("low");
  }
  return (
    <div className="tasks-menu">
      {/* If there is a task created isAdded will be true so the starter form only render once */}
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
      {/* Only when there is a task the task wrapper will be rendered */}
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
      {/* Show the task creator form on button press */}
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
