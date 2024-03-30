import React from "react";
import ReactDOM from "react-dom/client";
import App from "/src/components/App.jsx";
import "/src/styles/index.css";
import Memoria from "/src/memoria/Memoria.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Memoria>
      <App />
    </Memoria>
  </React.StrictMode>
);
