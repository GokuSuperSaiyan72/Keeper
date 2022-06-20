import { useEffect, useState } from "react";
import "./AddTasks.css";
import TaskCard from "./TaskCard";

const AddTasks = () => {
  const [isInputEnabled, setIsInputEnabled] = useState(false);
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  const [tasks, setTasks] = useState([]);

  const OnAddHandler = () => {
    setTasks([{ id: tasks.length + 1, title, note }, ...tasks]);
    setTitle("");
    setNote("");
  };

  return (
    <div>
      <div className="addTasks">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onClick={() => {
            setIsInputEnabled(true);
          }}
          className="addInput"
          type="text"
          placeholder="Title"
        />
        {isInputEnabled ? (
          <>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Take a note..."
              className="addInput resize"
            />
            <button onClick={() => OnAddHandler()}>+</button>
          </>
        ) : null}
      </div>

      <div>{tasks.length ? tasks.map((data) => <TaskCard />) : null}</div>
    </div>
  );
};

export default AddTasks;
