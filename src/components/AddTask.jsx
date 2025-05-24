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
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a task...  "
        className="p-2 border-2 mr-4"
      />
      <button
        onClick={handleSubmit}
        className="bg-black p-2.5 text-white border-2 cursor-pointer hover:bg-white hover:text-black"
      >
        Add Task +
      </button>
    </div>
  );
};

export default AddTask;
