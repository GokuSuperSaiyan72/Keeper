import { useEffect, useState } from "react";
import "./AddTasks.css";

const AddTasks = ({ getTasks }) => {
  const [isInputEnabled, setIsInputEnabled] = useState(false);
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    getTasks(tasks);
  }, [tasks]);

  const OnAddHandler = () => {
    setTasks([{ title, note }, ...tasks]);
    setTitle("");
    setNote("");
  };

  return (
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
  );
};

export default AddTasks;
