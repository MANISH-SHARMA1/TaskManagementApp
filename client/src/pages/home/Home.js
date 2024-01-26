import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosClient } from "../../utils/axiosClient";
import { KEY_ACCESS_TOKEN, removeItem } from "../../utils/localStorageManager";
import TaskForm from "../../components/taskForm/TaskForm";
import TaskList from "../../components/taskList/TaskList";
import "./Home.scss";

function Home() {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  // function to logout user
  async function handleLogoutClicked() {
    try {
      await axiosClient.get("/auth/logout");
      removeItem(KEY_ACCESS_TOKEN);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchTasks() {
    // Fetch tasks from backend API
    const response = await axiosClient.get("/task/");
    console.log("response: ", response.result);
    setTasks(response.result);
    console.log("tasks: ", tasks);
  }

  async function addTask(task) {
    // Send task to backend API for creation
    console.log(task);
    const response = await axiosClient.post("/task/", {
      title: `${task.title}`,
      description: `${task.description}`,
      dueDate: `${task.dueDate}`,
    });
    console.log("response get: ", response);
    fetchTasks();
  }

  async function deleteTask(taskId) {
    // Send request to delete task by ID
    const response = await axiosClient.delete(`/task/${taskId}`);
    console.log(" deleted response", response);
    fetchTasks();
  }

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <>
      <div className="home">
        <div className="nav">
          <h3>Task Manager App</h3>
          <h3 onClick={handleLogoutClicked}>LogOut</h3>
        </div>
        <div className="body">
          <div >
            <TaskForm onSubmit={addTask} />
          </div>
          <div >
            {tasks.length == 0 ? (
              <p id="emptyList">No task present.</p>
            ) : (
              <TaskList tasks={tasks} onDelete={deleteTask} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
