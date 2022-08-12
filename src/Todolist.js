import "./Todolist.css";
import { GrClose } from "react-icons/gr";

export const Todolist = ({ tasks ,setTask}) => {


  const deleteTask = (id)=>{
      let filteredTask = [...tasks];
      filteredTask = filteredTask.filter(x => x.id !== id)
      setTask(filteredTask)
  }

  return (
    <div className="list">
      {tasks.map((task) => (
        <div className="task-container">
          <span className="task">{task.name}</span>
          <span className="icon-container">
            <GrClose className="icon" onClick={()=> deleteTask(task.id)}/>
          </span>
        </div>
      ))}
    </div>
  );
};
