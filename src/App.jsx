import "./App.css";

//* 🧩 Features:
//? Add, delete, complete tasks ✅
//*  Filter: All / Completed / Pending
//? State with useReducer
//* Global access via useContext
//? Routing (Home, About, 404)
//* Persist in localStorage (optional)
//? Clean UI with component structure
import { Routes, Route } from "react-router";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-amber-50 min-h-[100vh] flex flex-col items-center p-8">
      <Navbar />
      <div>
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
