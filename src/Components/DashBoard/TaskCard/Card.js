import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import "./Card.css";
const TaskCard = ({ data }) => {
  return (
    <div className="card">
      <h3>{data.title}</h3>
      <div>{data.note}</div>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <DeleteOutlined
          style={{ color: " #ED2939", fontSize: "20px", marginRight: "10px" }}
        />
        <EditOutlined style={{ color: "#00308F", fontSize: "20px" }} />
      </div>
    </div>
  );
};

export default TaskCard;
