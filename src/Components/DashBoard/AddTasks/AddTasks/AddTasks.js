import { useEffect, useState } from "react";
import "./AddTasks.css";
import TaskCard from "./TaskCard";

const AddTasks = () => {
  const [isInputEnabled, setIsInputEnabled] = useState(false);
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [isEditEnabled, setIsEditEnabled] = useState(false);
  const [curTask, setCurTask] = useState([]);

  const [tasks, setTasks] = useState([]);

  const isvalid = () => {
    if (title && note) {
      return true;
    } else {
      alert("Entry Fields Can't Be Empty");
    }
  };

  const onAddTasksInLocalStorage = (task) => {
    localStorage.setItem("tasks", JSON.stringify(task));
  };
  const localStorageTaskItem = JSON.parse(localStorage.getItem("tasks"));
  useEffect(() => {
    if (localStorageTaskItem) {
      setTasks(localStorageTaskItem);
    }
  }, [title]);

  const OnAddHandler = () => {
    let validate = isvalid();
    if (validate) {
      let taskitem = {
        title,
        note,
        id: curTask.id,
      };
      if (isEditEnabled) {
        onAddTasksInLocalStorage([taskitem, ...tasks]);
        setTasks([taskitem, ...tasks]);
        setTitle("");
        setNote("");
        setIsInputEnabled(false);
        setIsEditEnabled(false);
      } else {
        let taskitem = {
          id: tasks.length + 1,
          title,
          note,
        };

        onAddTasksInLocalStorage([taskitem, ...tasks]);
        setTasks([taskitem, ...tasks]);
        setTitle("");
        setNote("");
        setIsInputEnabled(false);
      }
    }
  };

  const deleteHandler = (curTask) => {
    const newrray = tasks.filter((data) => data.id !== curTask.id);
    setTasks(newrray);
    localStorage.setItem("tasks", JSON.stringify(newrray));
  };

  const onEditClickHandler = (curTask) => {
    setCurTask(curTask);
    setIsEditEnabled(true);
    setIsInputEnabled(true);
    setTitle(curTask.title);
    setNote(curTask.note);
    deleteHandler(curTask);
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
          ? tasks.map((data, index) => (
              <TaskCard
                key={index}
                data={data}
                deleteHandler={deleteHandler}
                onEditClickHandler={onEditClickHandler}
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default AddTasks;
