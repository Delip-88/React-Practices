import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import del from './del.png';

function App() {
  const [inputTask, setInputTask] = useState("");
  const [components, setComponents] = useState([]);
  const [nextId, setNextId] = useState(1);
  const inputRef = useRef(null);
  const prevTaskRef = useRef("");

  // Load tasks from local storage when the component mounts
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setComponents(storedTasks);
    // Set nextId based on the highest id in storedTasks
    const maxId = storedTasks.reduce((max, task) => Math.max(max, task.id), 0);
    setNextId(maxId + 1);
  }, []);

  // Store tasks in local storage whenever components state changes
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(components));
  }, [components]);

  // Effect to store previous task value
  useEffect(() => {
    prevTaskRef.current = inputTask;
  }, [inputTask]);

  const handleChange = (e) => {
    setInputTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputTask.trim() === "") {
      inputRef.current.focus(); // Focus the input field if it's empty
      return;
    }
    const now = new Date();
    const newMsg = {
      id: nextId,
      msg: inputTask.trim(),
      date: now.toLocaleString()
    };
    setComponents(prevComponents => [...prevComponents, newMsg]);
    setNextId(nextId + 1);
    setInputTask(''); // Clear the input field after adding
    console.log("Previous Task:", prevTaskRef.current); // Log the previous task
  };

  const onDelete = (id) => {
    setComponents(prevComponents => prevComponents.filter(todo => todo.id !== id));
  };

  const TaskBluePrint = ({ msg, id, date }) => {
    return (
      <li className="taskList" key={id}>
        <p>{id + ' ' + msg}</p>
        <p>{date}</p>
        <img src={del} style={{ width: '20px', height: '20px' }} alt="delete" onClick={() => onDelete(id)} />
      </li>
    );
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <textarea
          name="inputTask"
          id="inputTask"
          value={inputTask}
          ref={inputRef}
          onChange={handleChange}
          rows={4}
          cols={50}
        />
        <button type="submit">
          Add more
        </button>
      </form>

      <div className="tasks">
        <ul>
          {components.map(task => (
            <TaskBluePrint key={task.id} id={task.id} msg={task.msg} onDelete={onDelete} date={task.date} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
