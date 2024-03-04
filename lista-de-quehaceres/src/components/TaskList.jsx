import { useEffect, useState } from "react";

function TaskList() {
    const [tasks, setTasks] = useState(() => {
        const storedTasks = JSON.parse(localStorage.getItem("tasks"));
        return storedTasks.length > 0 ? storedTasks : [{ text: "Get Python black belt", done: true }];
      });
    useEffect(() => {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }), [tasks];console.log(tasks)

  const addTask = (text) => {
    setTasks([...tasks, { text, done: false }]);
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };
  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks);
  };

  return (
    <div>
        <div className="mt-4 ml-5">
        <input
          type="text"
          placeholder="Agregar tarea"
          className="p-2 border rounded"
        />
        <button
          onClick={(e) => addTask(e.target.previousSibling.value)}
          className="ml-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Agregar Tarea
        </button>
      </div>
      {tasks.map((task, index) => (
        <div key={index} className="flex items-center mt-5 ml-5">
          <input
            type="checkbox"
            checked={task.done}
            onChange={() => toggleTask(index)}
          />
          <p
            className="ml-2"
            style={{ textDecoration: task.done ? "line-through" : "none" }}
          >
            {task.text}
          </p>
          <button
            onClick={() => removeTask(index)}
            className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Eliminar
          </button>
        </div>
      ))}
      
    </div>
  );
}

export default TaskList;
