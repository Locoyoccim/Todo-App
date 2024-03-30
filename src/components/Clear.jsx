import "/src/styles/Clear.css";
import { useContext } from "react";
import { Activities } from "/src/memoria/Memoria.jsx";



function Clear() {
  const [estado, enviar] = useContext(Activities);
  const AllTask = {...estado.objetos}

  const clearComplete = () => {
    enviar({ tipo: "clearComplete", meta: AllTask });
  };
  
  const taskCounter = estado.orden.length

  return (
    <>
      <div className="clear_container">
        <div>{taskCounter} items left</div>
        <button onClick={clearComplete}>Clear Completed</button>
      </div>
    </>
  );
}

export default Clear;
