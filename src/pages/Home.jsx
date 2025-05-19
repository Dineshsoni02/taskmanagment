import React, { useState } from "react";
import AddTask from "../components/AddTask";
import FilterTabs from "../components/FilterTabs";
import TaskList from "../components/TaskList";

const Home = () => {
  const [filter, setFilter] = useState("all");

  return (
    <div className="w-full flex flex-col items-center">
      <AddTask />
      <FilterTabs filter={filter} setFilter={setFilter} />
      <TaskList filter={filter} />
    </div>
  );
};

export default Home;
