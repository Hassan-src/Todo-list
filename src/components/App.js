import { useState } from "react";
import TaskList from "./TaskList";
import TaskListNav from "./TaskListNav";
import "../styles/App.css";
import "../styles/global.css";
import "../styles/variables.css";
import "../styles/scrollbar.css";
export default function App() {
  const [taskArray, setTaskArray] = useState([]);
  const [isAdded, setIsAdded] = useState(false);
  const [hamBtn, setHamBtn] = useState(false);
  const [userName, setUserName] = useState("");
  console.log(taskArray);
  function TaskArray(taskArray) {
    setTaskArray((t) => [...t, taskArray]);
    if (!isAdded) setIsAdded(true);
  }
  function handleHamBtn() {
    setHamBtn((h) => !h);
  }
  function handleTaskCheckBox(id) {
    setTaskArray((task) => {
      const updatedTask = task.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task,
      );
      return updatedTask.sort((a, b) => {
        return a.done - b.done;
      });
    });
  }
  function handleDeleteItem(id) {
    setTaskArray((task) => task.filter((task) => task.id !== id));
  }
  return (
    <div className="App">
      <div className="main">
        <TaskListNav
          userName={userName}
          hamBtn={hamBtn}
          onHamBtn={handleHamBtn}
          isAdded={isAdded}
        />
        <TaskList
          onTaskArray={TaskArray}
          taskArray={taskArray}
          setTaskArray={setTaskArray}
          isAdded={isAdded}
          userName={userName}
          setUserName={setUserName}
          hamBtn={hamBtn}
          onDeleteItem={handleDeleteItem}
          onDoneTask={handleTaskCheckBox}
        />
      </div>
    </div>
  );
}
