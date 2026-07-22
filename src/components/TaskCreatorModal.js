import { useEffect, useRef } from "react";
import Button from "./Button";
import "../styles/TaskCreatorModal.css";
// The task form functionality
export default function TaskCreatorModal({
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
    <div className="task-creator-modal">
      <form onSubmit={onSubmitStarterForm}>
        <div className="starter-form-detail">
          <label htmlFor="Title">Task title:</label>
          <input
            type="text"
            id="Title"
            minLength={1}
            maxLength={8}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            ref={inputElement}
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
            required
          />
        </div>
        <div className="starter-form-detail">
          <label htmlFor="Importance">Importance:</label>
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
          <Button>Add Task!</Button>
        </div>
      </form>
    </div>
  );
}
