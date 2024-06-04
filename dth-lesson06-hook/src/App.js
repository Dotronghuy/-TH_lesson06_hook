import "./App.css";
import React, { useState } from "react";
import ĐthListTask from "./components/ĐthListTask";
import ĐthTaskAddOrEdit from "./components/ĐthTaskAddOrEdit";

function App() {
  //mock data
  const đth_listTasks = [
    {
      đth_taskId: 2210900106,
      đth_taskName: "Đỗ Trọng Huy",
      đth_level: "Small",
    },
    {
      đth_taskId: 1,
      đth_taskName: "Học lập trình frontend",
      đth_level: "Small",
    },
    {
      đth_taskId: 2,
      đth_taskName: "Học lập trình reactjs",
      đth_level: "Medium",
    },
    {
      đth_taskId: 3,
      đth_taskName: "Lập trình với Frontend - Reactjs",
      đth_level: "High",
    },
    {
      đth_taskId: 4,
      đth_taskName: "Lập trình Fullstack (PHP, Java, NetCore)",
      đth_level: "Small",
    },
  ];
  // sử dụng hàm useState để lưu trữ trạng thái dữ liệu
  const [đthlistTasks, setđthlistTasks] = useState(đth_listTasks);

  const task = { đth_taskId: 0, đth_taskName: "NTU", đth_level: "Small" };
  const [dthTask, setdthTask] = useState(task); // dùng để render form

  //quản lí trạng thái form khi thêm , sửa
  const [dthAddOrEdit, setdthAddOrEdit] = useState(false); //Thêm
  const dthHandleEdit = (param) => {
    setdthTask(param);
    setdthAddOrEdit(true);
  };

  const đthHandleSubmit = (đthParam) => {
    if (dthAddOrEdit === false) {
      // khi thêm mới
      setdthlistTasks((prev) => {
        return [...prev, dthParam];
      });
    } else {
      // submit khi sửa
      for (let i = 0; i < dthlistTasks.length; i++) {
        if (dthlistTasks[i].dth_taskId == dthParam.dth_taskId) {
          dthlistTasks[i] = dthParam;
        }
      }
      //  setdthListTasks(dthlistTasks);
      setdthlistTasks((prev) => {
        return [...prev];
      });
    }
  };

  return (
    <div className="container border">
      <h1>Đỗ Trọng Huy - K22CNT1</h1>
      <hr />
      <div>
        {/*Danh sách list task */}
        <ĐthListTask
          renderđthListTasks={đthlistTasks}
          onDTHEdit={dthHandleEdit}
        />
      </div>
      <ĐthTaskAddOrEdit
        đthOnSubmit={đthHandleSubmit}
        renderdthAddOrEdit={dthAddOrEdit}
        renderdthTask={dthTask}
      />
    </div>
  );
}

export default App;
