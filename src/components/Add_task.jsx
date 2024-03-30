import React, { useState, useContext, useId } from "react";
import "/src/styles/add_task.css";
import send_icon from "/public/images/reshot-icon-telegram-LSZVDUKX6M.svg";
import { Activities } from "/src/memoria/Memoria.jsx";

function Add() {
  function idGenerator() {
    const id = Math.random();
    return id;
  }

  const [estado, enviar] = useContext(Activities);
  const [buttonAnimation, setButtonAnimation] = useState("");
  const [error, setError] = useState("");
  const [newtask, setNewTask] = useState({
    id: idGenerator(),
    actividad: "",
    completed: false,
  });
  const { actividad, completed, id } = newtask;

  function jumpButton() {
    setButtonAnimation("clicked");
    setTimeout(() => {
      setButtonAnimation("");
    }, 3000);
  }

  function Newest(e) {
    setNewTask((estado) => ({ ...estado, actividad: e.target.value }));
  }

  const create = () => {
    if (newtask.actividad == "") {
      setError("activate");
      setTimeout(() => {
        setError("");
      }, 2000);
    } else {
      enviar({ tipo: "create", meta: newtask });
      setNewTask({ id: idGenerator(), actividad: "" });
    }
  };

  const onPreesButton = event =>  {
    if (event.key === "Enter") {
      jumpButton();
      create();
    }
  }

  return (
    <>
      <div className="add_task_container">
        <div className={`error ${error}`}>Can't be blank</div>
        <button
          className={`send_button ${buttonAnimation}`}
          onClick={() => {
            jumpButton();
            create();
          }}
        >
          <img src={send_icon} alt="arrow send" className="send_icon" />
        </button>
        <input
          type="text"
          className="task_details"
          placeholder="Create a new todo..."
          onChange={(event) => Newest(event)}
          value={actividad}
          onKeyDown={onPreesButton}
        />
      </div>
    </>
  );
}

export default Add;
