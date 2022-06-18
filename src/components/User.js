import React from "react";
import { UserType } from "./UserType";

export const User = () => {
  return (
    <section
      style={{
        backgroundColor: "whitesmoke",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          textAlign: "left",
          marginTop: "50px",
          marginLeft: "50px",
          width: "120px",
          alignSelf: "flex-start",
        }}
      >
        <h1>Utilizador</h1>
      </div>

      <UserType />
    </section>
  );
};
