import { useState } from "react";
import TaskList from "./TaskList";
import TaskListNav from "./TaskListNav";
import "../styles/App.css";
import "../styles/global.css";
import "../styles/variables.css";
import "../styles/scrollbar.css";

export default function App() {
  const [taskArray, setTaskArray] = useState([]);
  // Setting state for managing button click
  const [isAdded, setIsAdded] = useState(false);
  const [hamBtn, setHamBtn] = useState(false);
  const [userName, setUserName] = useState("");
  // Destructuring the array and setting the added state to true so that the starting form stays close
  function TaskArray(taskArray) {
    setTaskArray((t) => [...t, taskArray]);
    if (!isAdded) setIsAdded(true);
  }
  // Handling button state
  function handleHamBtn() {
    setHamBtn((h) => !h);
  }
  // Handling the checkbox functionality
  function handleTaskCheckBox(id) {
    // chceking the id of the task and setting the done state
    setTaskArray((task) => {
      const updatedTask = task.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task,
      );
      // when the state is checked making it to move to the end of the list remember (false - true = -1)
      return updatedTask.sort((a, b) => {
        return a.done - b.done;
      });
    });
  }
  // On delete button click for every task first check for the id then remove it
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
