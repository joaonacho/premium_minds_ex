import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <aside
      style={{
        backgroundColor: "lightblue",
        width: "300px",
        height: "100vh",
      }}
    >
      <nav>
        <ul style={{ listStyle: "none", textAlign: "left", marginTop: "50px" }}>
          <li>
            <Link to="/about">Sobre nós</Link>
          </li>
          <li>
            <Link to="/user">Utilizador</Link>
          </li>
          <li>
            <Link to="/quantum">Quantum solum</Link>
          </li>
          <li>
            <Link to="/marcus">Marcus Tremer</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
