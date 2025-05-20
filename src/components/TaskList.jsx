import React from "react";
import { useTask } from "../context/TaskContext";
import TaskItem from "./TaskItem";

const TaskList = ({ filter }) => {
  const { state } = useTask();

  const filteredTasks = state.tasks.filter((task) => {
    if (filter == "completed") return task.completed;
    if (filter == "pending") return !task.completed;
    return true;
  });


  return (
    <div className="mt-4 w-full max-w-md">
      {filteredTasks &&
        filteredTasks.map((task) => <TaskItem key={task.id} task={task} />)}
    </div>
  );
};

export default TaskList;
