import React from "react";
import { UserType } from "./UserType";
import "../styles/UserType.css";

export const User = () => {
  return (
    <section
      className="user-section"
    >
      <div
        className="user-section-header"
      >
        <h1>Utilizador</h1>
      </div>

      <UserType />
    </section>
  );
};
