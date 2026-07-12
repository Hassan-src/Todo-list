import "../styles/navbar.css";
export default function TaskListNav({ userName, onHamBtn, hamBtn, isAdded }) {
  return (
    <div className="nav-bar">
      {isAdded && (
        <button
          className={`hamburger-button ${hamBtn ? "ham-open" : ""}`}
          onClick={onHamBtn}
          aria-label="Toggle menu"
          aria-expanded={hamBtn}
        >
          <span className="hamburger">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </span>
          <span className="hamburger-text">
            {hamBtn ? "Close" : "Add More!"}
          </span>
        </button>
      )}
      <h1 className="nav-bar-logo">ToDo-List</h1>
      <form>
        <input type="text" placeholder="Search" />
      </form>
      <span className="nav-bar-name">{userName}</span>
    </div>
  );
}
