import React, { useState } from "react";

export default function ĐthTaskAddOrEdit({ đthOnSubmit }) {
  //Đối tượng task
  const đthTaskobj = {
    đth_taskId: 0,
    đth_taskName: "",
    đth_level: "",
  };
  const [đthTask, setđthTask] = useState(đthTaskobj);
  //Hàm xử lí thay đổi trên điều khiển
  const đthHandleChange = (đthEvent) => {
    const name = đthEvent.target.name;
    const value = đthEvent.target.value;
    setđthTask((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const đthHandleSubmit = (đthEvent) => {
    đthEvent.preventDefault();
    đthOnSubmit(đthTask);
  };
  return (
    <div>
      <h2>Thêm mới task</h2>
      <form>
        <div>
          <label>Task ID</label>
          <input
            name="đth_taskId"
            value={đthTask.đth_taskId}
            onChange={đthHandleChange}
          />
        </div>
        <div>
          <label>Task Name</label>
          <input
            name="đth_taskName"
            value={đthTask.đth_taskName}
            onChange={đthHandleChange}
          />
        </div>
        <div>
          <label>Task Level</label>
          <select
            name="đth_level"
            value={đthTask.đth_level}
            onChange={đthHandleChange}
          >
            <option value={"Small"}>Small</option>
            <option value={"Medium"}>Medium</option>
            <option value={"High"}>High</option>
          </select>
        </div>
        <button onClick={đthHandleSubmit}>Ghi lại</button>
      </form>
    </div>
  );
}
