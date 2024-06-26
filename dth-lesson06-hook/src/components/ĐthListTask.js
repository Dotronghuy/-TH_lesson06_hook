import React from "react";

export default function ĐthListTask({ renderĐthListTasks, onDTHEdit }) {
  const [dthList, setdthList] = useState(renderĐthListTasks);
  useEffect(() => {
    setdthList(renderĐthListTasks);
  }, [renderĐthListTasks]);

  //Hàm xử lí dữ liệu edit
  const dthHandleEdit = (param) => {
    console.log("Edit", param);
    //chuyển dữ liệu sửa lên app
    onDTHEdit(param);
  };

  //render data
  let đthElementTask = renderĐthListTasks.map((task, index) => {
    return (
      <>
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{task.đth_taskId}</td>
          <td>{task.đth_taskName}</td>
          <td>{task.đth_level}</td>
          <td>
            <button className="btn btn-success">Edit</button>
            <button className="btn btn-danger">Remove</button>
          </td>
        </tr>
      </>
    );
  });

  return (
    <div>
      <h2>Danh sách các nhiệm vụ</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>STT</th>
            <th>Task Id</th>
            <th>Task Name</th>
            <th>Task Level</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{đthElementTask}</tbody>
      </table>
    </div>
  );
}
