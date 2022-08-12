import { useState } from "react";
import "./App.css";
import { Todolist } from "./Todolist";

function App() {
  const [userInput, setUserInput] = useState('');
  const [tasks, setTask] = useState([]);
  const [error, setError] = useState(false);
  
  
  const addTask = () => {
    if (userInput === '') {
      setError(true);
      return;
    }
    const newTask ={ 
      id : Math.floor(Math.random()* 1000), 
      name : userInput
    }
    setTask([...tasks,newTask]);
    setUserInput('')
    setError(false)
  };
  console.log(tasks)
  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <div className="task-form">
      {error ? <span>please enter something...</span> : <></>}
        <input
          value={userInput}
          className="input-field"
          placeholder="enter your task"
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button className="button" onClick={addTask}>
          Add
        </button>
        </div>
        <Todolist  tasks={tasks} setTask={setTask}/> 
    </div>
  );
}

export default App;
