import React from "react";

const TaskDashboard = () => {
  //Dummy data
  const isLogin = true;
  const tasks = [
    { id: 1, title: "Learn React basics", completed: true },
    { id: 2, title: "Build a project", completed: false },
    { id: 3, title: "Submit assignment", completed: false },
  ];
  if (!isLogin) {
    return <h2>Please login to view your tasks</h2>;
  }
  return (
    <div>
      <h1>Welcome to your Task Dashboard</h1>
      <ul>
        {tasks.map((task) => {
          return (
            <li
              style={{ color: task.completed ? "green" : "red" }}
              key={task.id}
            >
              {task.completed ? "✅" : "❌"} {task.title}{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TaskDashboard;
