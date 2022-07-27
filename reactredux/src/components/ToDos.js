import React, { useState } from "react";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Remove , Update } from "../redux/actions/action";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
 import {useDispatch,useSelector} from "react-redux"
 import Button from "react-bootstrap/Button";
 import Modal from "react-bootstrap/Modal";
function ToDos() {

  const {User_data}=useSelector((store)=>store.todoreducers)
  const [showEye,setShowEye]=useState(false)
  const [showEyeValue,setShowEyeValue]=useState("")

  const [showdelt, setShowDelt] = useState(false);
  const [update, setUpdate] = useState("");
  const [ind, setInd] = useState("");


    const handleClose = () => setShowDelt(false);

  const handleshowDel=(el)=>{
    setShowDelt(true)
    setUpdate(el)
  }
  const dispatch = useDispatch();
  const remove=(id)=>{
    dispatch(Remove(id))
  }
  const userTask_update=()=>{
      dispatch(Update(update,ind))
      handleClose();
  }
  return (
    <div className="todo-data col-lg-5 mx-auto mt-2">
      {User_data.map((el, index) => {
        return (
          <div
            key={index}
            className="todo-container d-flex column align-items-center justify-content-between px-2 mt-1"
            style={{
              background: "#03243a",
              borderRadius: "5px",
              height: "45px",
              color: "#c5c5c5",
            }}
          >
            <li style={{ listStyle: "none" }}>{el} </li>
            <div className="edit-dit col-lg-3 py-2 d-flex justify-content-between align-items-center">
              <ModeEditIcon
                onClick={() => {
                  handleshowDel(el);
                  setInd(index);
                }}
                style={{ color: "#558ad8", cursor: "pointer" }}
              />
              <DeleteIcon
                onClick={() => remove(index)}
                style={{ color: "red", cursor: "pointer" }}
              />
              <RemoveRedEyeIcon
                onClick={() => {
                  setShowEye(true);
                  setShowEyeValue(el);
                }}
                style={{ color: "#74c239", cursor: "pointer" }}
              />
            </div>
          </div>
        );
      })}

      <Modal show={showEye}>
        <h1 className="text-center">{showEyeValue}</h1>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEye(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Update Modal */}
      <Modal show={showdelt} onHide={handleClose}>
        <h3 className="text-center mt-2">Update Your Task</h3>
        <Modal.Header closeButton>
          <div className="todo col-lg-5 mx-auto d-flex justify-content-between">
            <input
              value={update}
              onChange={(e) => setUpdate(e.target.value)}
              name="task"
              className="form-control col-lg-5 mt-2"
            />
           
          </div>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>userTask_update()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ToDos;
