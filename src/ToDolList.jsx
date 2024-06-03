import { useState } from "react";

function ToDolList() {
  const [tasks, setTasks] = useState([
    "Eat Breakfast",
    "Go to the gym",
    "Learn React",
  ]);

  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    // Add a new task to the list of tasks
    // Only add a new task if it is not an empty string or only contains spaces
    if (newTask.trim() !== "") {
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setNewTask("");
    }
  }

  function removeTask(index) {
    // Remove a task from the list of tasks based on its index in the array of tasks
    // (use the filter method) and update the tasks state
    // return all tasks (i) except the one at the index that we clicked on
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index) {
    // Move a task up in the list of tasks
    // Swap the task at the index with the task at the index - 1
    // (use the map method) and update the tasks state
    // if the index is 0, we can't move it up
    if (index === 0) {
      return;
    }
   

    const updatedTasks = tasks.map((task, i) => {
        // if the index is the one we clicked on, return the task at the index - 1
      if (i === index - 1) {
        return tasks[index];
      } else if (i === index) {
        return tasks[index - 1];
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function moveTaskDown(index) {
    // Move a task down in the list of tasks
    // Swap the task at the index with the task at the index + 1
    // (use the map method) and update the tasks state
    // if the index is the last one, we can't move it down
    if (index === tasks.length - 1) {
      return;
    }
    const updatedTasks = tasks.map((task, i) => {
      if (i === index) {
        return tasks[index + 1];
      } else if (i === index + 1) {
        return tasks[index];
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  return (
    <div className="to-do-list">
      <h1>To Do List</h1>
      {/* // Add a new task */}
      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          // Update the newTask state when the input changes
          onChange={handleInputChange}
        />
        {/* // Add a new task when the button is clicked  */}
        <button className="add-task-button" onClick={addTask}>
          Add
        </button>
      </div>

      {/* // Display the list of tasks and add buttons to delete, move up and move down */}
      <ol className="list-container">
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button onClick={() => removeTask(index)} className="delete-button">
              Delete
            </button>
            <button
              onClick={() => moveTaskUp(index)}
              className="moveTaskUp-button"
            >
              👆
            </button>
            <button
              onClick={() => moveTaskDown(index)}
              className="moveTaskDown-button"
            >
              👇
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDolList;
