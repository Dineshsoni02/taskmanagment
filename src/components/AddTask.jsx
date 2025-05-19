import React, { useState } from "react";
import { useTask } from "../context/TaskContext";
import { v4 as uuidv4 } from "uuid";

const AddTask = () => {
  const [text, setText] = useState("");
  const { dispatch } = useTask();

  const handleSubmit = () => {
    if (text.trim() === "") return;
    dispatch({
      type: "add_task",
      payload: { id: uuidv4(), text, completed: false },
    });
    setText("");
  };

  return (
    <div>
      <p>Add Task</p>
      <input
        type="text"
        placeholder="Enter the text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border p-2 rounded"
      />
      <button
        onClick={handleSubmit}
        className="ml-2 bg-blue-500 text-white px-3 py-1 rounded"
      >
        Add +
      </button>
    </div>
  );
};

export default AddTask;
