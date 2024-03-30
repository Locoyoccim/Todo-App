import { useState, useContext, useEffect } from "react";
import Checkbox from "/src/components/Checkbox.jsx";
import ximg from "/public/images/icon-cross.svg";
import "/src/styles/Todo_task.css";
import { Activities } from "/src/memoria/Memoria.jsx";


function Todo_task({ actividad, completed, id }) {
    const[TaskStatus, setTaskStatus] = useState('');
    const[estado, enviar] = useContext(Activities);
    

   useEffect(() => {
      if (completed === true) {
        setTaskStatus('completed');
      } else {
        setTaskStatus('');
      }
    }, [completed]);

    const deleteTask = () => {
      enviar({tipo: 'delete', id})
    }


  return (
    <>
      <div className="main_container_todo_task">
        <div className="checkbox_tittle">
          <Checkbox id_task={id} completed={completed} actividad={actividad}/>
          <p className={TaskStatus}>{actividad}</p>
        </div>
        <button className="x_button" onClick={deleteTask} >
          <img src={ximg} alt="x_img" />
        </button>
      </div>
      <hr />
    </>
  );
}

export default Todo_task;
