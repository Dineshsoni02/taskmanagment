import React from "react";
import { useTask } from "../context/TaskContext";

const TaskItem = ({ task }) => {
  const { dispatch } = useTask();
  return (
    <div className="flex items-center justify-between border p-2 my-2 rounded bg-white shadow-sm">
      <span
        onClick={() => dispatch({ type: "toggle_task", payload: task.id })}
        className={
          task.completed
            ? "line-through text-gray-500 cursor-pointer"
            : "cursor-pointer"
        }
      >
        {task.text}
      </span>
      <button
        className="text-red-500"
        onClick={() => dispatch({ type: "delete_task", payload: task.id })}
      >
        ❌
      </button>
    </div>
  );
};

export default TaskItem;
