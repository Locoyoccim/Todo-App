import React, { useEffect } from "react";
import { useState } from "react";
import "/src/styles/fotter.css";

function Fotter({ filterState }) {
  const [colorState, setColorState] = useState({
    buttonAll: "blue",
    buttonActive: "",
    buttonCompleted: "",
  });



  function handleButtonClick(buttonId) {
    switch (buttonId) {
      case "buttonAll":
        setColorState({
          buttonAll: "blue",
          buttonActive: "",
          buttonCompleted: "",
        });
        console.log(colorState)
        break;
      case "buttonActive":
        setColorState({
          buttonAll: "",
          buttonActive: "blue",
          buttonCompleted: "",
        });
        console.log(colorState)
        break;
      case "buttonCompleted":
        setColorState({
          buttonAll: "",
          buttonActive: "",
          buttonCompleted: "blue",
        });
        console.log(colorState)
        break;
    }
  }

  return (
    <>
      <div className="fotter_container">
        <button
          className={`all ${colorState.buttonAll}`}
          onClick={() => {
            filterState("all");
            handleButtonClick("buttonAll");
          }}
        >
          All
        </button>
        <button
          className={`Active ${colorState.buttonActive}`}
          onClick={() => {
            filterState("active"), handleButtonClick("buttonActive");
          }}
        >
          Active
        </button>
        <button
          className={`Completed ${colorState.buttonCompleted}`}
          onClick={() => {
            filterState("completed"), handleButtonClick("buttonCompleted");
          }}
        >
          Completed
        </button>
      </div>
    </>
  );
}
export default Fotter;
