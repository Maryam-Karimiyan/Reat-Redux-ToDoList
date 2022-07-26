import React from "react";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
 import {useDispatch,useSelector} from "react-redux"
function ToDos() {

  const {User_data}=useSelector((state)=>state.todoreducers)
  console.log(User_data);
  return (
    <div className="todo-data col-lg-5 mx-auto mt-2">
      <div
        className="todo-container d-flex column align-items-center justify-content-between px-2"
        style={{
          background: "#dcdde1",
          borderRadius: "3px",
          height: "45px",
        }}
      >
        <li style={{ listStyle: "none" }}>reeee </li>
        <div className="edit-dit col-lg-3 py-2 d-flex justify-content-between align-items-center">
          <ModeEditIcon style={{ color: "#3c40c6", cursor: "pointer" }} />
          <DeleteIcon style={{ color: "red", cursor: "pointer" }} />
          <RemoveRedEyeIcon style={{ color: "#1dd1a1", cursor: "pointer" }} />
        </div>
      </div>
    </div>
  );
}

export default ToDos;
