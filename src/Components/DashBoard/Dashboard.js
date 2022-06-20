import { useState } from "react";
import AddTasks from "./AddTasks/AddTasks";

import "./Dashboard.css";
import TaskCard from "./TaskCard/Card";

const DashBoard = () => {
  const [tasks, setTasks] = useState([]);

  const getTasks = (data) => {
    setTasks(data);
  };

  return (
    <div className="dashBoardContainer">
      <AddTasks getTasks={getTasks} />

      <div
        style={{
          marginTop: "3.5%",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {tasks.length ? tasks.map((data) => <TaskCard data={data} />) : null}
      </div>
    </div>
  );
};

export default DashBoard;
