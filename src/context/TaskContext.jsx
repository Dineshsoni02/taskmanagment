import { createContext, useContext, useReducer,useEffect } from "react";

const initialState = { tasks: JSON.parse(localStorage.getItem("tasks")) || [] };
const reducer = (state, action) => {
  switch (action.type) {
    case "add_task":
      return { tasks: [...state.tasks, action.payload] };
    case "toggle_task":
      return {
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };
    case "delete_task":
      return {
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    default:
      return state;
  }
};

const TaskContext = createContext(null);

export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(state.tasks));
  }, [state.tasks]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTask = () => useContext(TaskContext);
