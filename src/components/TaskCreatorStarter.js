import { useRef, useEffect } from "react";
import Button from "./Button";
import "../styles/TaskCreatorStarter.css";
// Task creator starter form
export default function TaskCreatorStarter({
  userName,
  setUserName,
  title,
  setTitle,
  description,
  setDescription,
  importance,
  setImportance,
  onSubmitStarterForm,
}) {
  const inputElement = useRef(null);
  useEffect(function () {
    inputElement.current.focus();
  }, []);
  return (
    <div className="show-on-start ">
      <form onSubmit={onSubmitStarterForm}>
        <p>Create a Task!</p>
        <div className="starter-form-detail">
          <label htmlFor="User-name">User Name:</label>
          <input
            type="text"
            id="User-name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            minLength={3}
            maxLength={6}
            placeholder="...3 to 6 Characters"
            ref={inputElement}
          />
        </div>
        <div className="starter-form-detail">
          <label htmlFor="Title">Task title:</label>
          <input
            type="text"
            id="Title"
            minLength={1}
            maxLength={8}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="starter-form-detail">
          <label htmlFor="Description">Description:</label>
          <textarea
            id="Description"
            rows={5}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            minLength={0}
            maxLength={60}
            required
          />
        </div>
        <div className="starter-form-detail">
          <p>Importance:</p>
          <select
            value={importance}
            onChange={(e) => setImportance(e.target.value)}
          >
            <option value={"low"}>Low</option>
            <option value={"medium"}>Medium</option>
            <option value={"high"}>High</option>
          </select>
        </div>
        <div className="starter-form-button">
          <Button>Add Task</Button>
        </div>
      </form>
    </div>
  );
}
