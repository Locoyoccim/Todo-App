import React, { useState } from "react";
import { useContext } from "react";
import Todo_task from "/src/components/Todo_task.jsx";
import { Activities } from "/src/memoria/Memoria.jsx";

function Memoria({ filter }) {
  const [estado, enviar] = useContext(Activities);

  const taskFilter = () => {
    switch (filter) {
      case "all":
        return estado.orden.map((id) => estado.objetos[id]);

      case "active":
        return estado.orden
          .map((id) => estado.objetos[id])
          .filter((obj) => obj.completed === false);
      case "completed":
        return estado.orden
          .map((id) => estado.objetos[id])
          .filter((obj) => obj.completed === true);
    }
  };

  return (
    //estado.orden.map(id => <Todo_task key={id} {...estado.objetos[id]} />)
    //objectActive.map(task => <Todo_task key={task.id} id={task.id} actividad={task.actividad} completed={task.completed} />)
    <div>
      {taskFilter().map((task) => (
        <Todo_task key={task.id} {...task} />
      ))}
    </div>
  );
}

export default Memoria;
