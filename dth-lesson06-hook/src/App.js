import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import ĐthListTask from "./components/ĐthListTask";
import ĐthTaskAddOrEdit from "./components/ĐthTaskAddOrEdit";

function App() {
  //mock data
  const đth_listTasks = [
    { đth_taskId: 2210900106, đth_taskName: "Lê Vinh Huy", đth_level: "Small" },
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

  const đthHandleSubmit = (đthParam) => {
    console.log("App:", đthParam);
    setđthlistTasks((prev) => {
      return [...prev, đthParam];
    });
  };
  return (
    <div className="container border">
      <h1>Lê Vinh Huy - K22CNT1</h1>
      <hr />
      <div>
        {/*Danh sách list task */}
        <ĐthListTask renderđthListTasks={đthlistTasks} />
      </div>
      <ĐthTaskAddOrEdit đthOnSubmit={đthHandleSubmit} />
    </div>
  );
}

export default App;
