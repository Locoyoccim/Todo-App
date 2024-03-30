import React, { useEffect } from "react";
import { useState, useContext } from "react";
import "/src/styles/checkbox.css";
import arrow from "/public/images/icon-check.svg";
import { Activities } from "/src/memoria/Memoria.jsx";

function Checkbox({ id_task }) {
  const [estado, enviar] = useContext(Activities);
  const [ButtonClass, setButtonClass] = useState("");
  const task = { ...estado.objetos[id_task] };
  const [updateTask, setUpdateTask] = useState({
    id: task.id,
    actividad: task.actividad,
    completed: task.completed,
  });

  //Se ejecuta al iniciar la app para validar el estatus de cada tarea y asignar el estado correto
  useEffect(() => {
    if (task.completed === true) {
      setButtonClass("checked");
    }
  }, []);

  useEffect(() => {
    if (ButtonClass === "") {
      setUpdateTask({ ...task, completed: true });
      enviar({ tipo: "update", meta: updateTask }); //Envie la actulizacion a la memoria atraves del reducer
    } else {
      setUpdateTask({ ...task, completed: false });
      enviar({ tipo: "update", meta: updateTask }); //Envie la actulizacion a la memoria atraves del reducer
    }
  }, [ButtonClass]);

  function TaskStatus() {
    if (ButtonClass === "") {
      setButtonClass("checked");
    } else {
      setButtonClass("");
  
    }
  }

  return (
    <>
      <div className="checkbox_container">
        <button className={ButtonClass} onClick={() => TaskStatus()}>
          <img className="arrow" src={arrow} alt="arrow_done" />
        </button>
      </div>
    </>
  );
}

export default Checkbox;
