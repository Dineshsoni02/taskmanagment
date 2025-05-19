import React from "react";
import { Link } from "react-router";
const Navbar = () => {
  return (
    <div>
      <nav className="flex gap-3 underline mb-5 bg-white p-2">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
    </div>
  );
};

export default Navbar;
