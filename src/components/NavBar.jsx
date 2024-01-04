import { Link } from "react-router-dom";
import React from "react";

function NavBar() {
  return (
    <nav>
      <Link to="/">All Players</Link>
      <Link to="/addNew">Add New Player</Link>
    </nav>
  );
}

export default NavBar;
