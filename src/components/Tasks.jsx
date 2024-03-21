import { useState, useEffect } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

export const Tasks = () => {
  const [taskList, setTaskList] = useState([]);
  // define the setting state functions
  const [loading] = useState(false);
  const [newTodo, setNewTodo] = useState("");

  // fetch tasks

  const fetchTasks = async () => {
    fetch("https://week-7-backend.onrender.com/tasks")
      .then((result) => result.json())
      .then((task) => {
        setTaskList(task);
      });
    // set task list to be saved in the state
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleNewTodoChange = (event) => {
    // set a  new ToDo from the value of the textarea defined in the TaskForm component
    setNewTodo(event.target.value);
  };

  const onFormSubmit = async (event) => {
    event.preventDefault();
    // define your POST request for new ToDo
    // don't forget to set the loading state
    fetch("https://week-7-backend.onrender.com/tasks", {
      method: "POST",
      body: JSON.stringify({
        description: newTodo,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((result) => result.json)
      .then((newData) => {
        setNewTodo((previousData) => [newData, ...previousData]);
      })
      .catch((error) => {
        console.error("Error fetching the data:", error);
      });
  };

  return (
    <div className="wrapper">
      <TaskForm
        newTodo={newTodo}
        handleNewTodoChange={handleNewTodoChange}
        onFormSubmit={onFormSubmit}
      />
      <TaskList
        loading={loading}
        taskList={taskList}
        setTaskList={setTaskList}
      />
    </div>
  );
};
