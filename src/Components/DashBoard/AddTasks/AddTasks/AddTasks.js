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
    setIsInputEnabled(false);
  };

  const deleteHandler = (curTask) => {
    setTasks(tasks.filter((data) => data.id !== curTask.id));
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

      <div
        style={{
          display: "flex",
          margin: "50px auto 0px auto",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {tasks.length
          ? tasks.map((data) => (
              <TaskCard data={data} deleteHandler={deleteHandler} />
            ))
          : null}
      </div>
    </div>
  );
};

export default AddTasks;
