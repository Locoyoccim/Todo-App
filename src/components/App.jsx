import { useState, useContext } from "react";
import "/src/styles/App.css";
import Top from "/src/components/Header.jsx";
import Add_task from "/src/components/Add_task.jsx";
import List from "/src/components/List.jsx";
import Clear from "./Clear";
import Footer from "/src/components/Fotter.jsx";

function App() {
  const [filter, setFilter] = useState("all");

  const filterState = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <>
      <div className="top_container ">
        <Top />
      </div>
      <div className="center">
        <section>
          <div className="todo_container">
            <Add_task />
          </div>
          <div className="todo_list">
            <List filter={filter} />
          </div>
          <div>
            <Clear />
          </div>
          <div className="footer_container_app">
            <Footer filter={filter} filterState={filterState} />
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
