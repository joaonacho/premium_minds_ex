import React from "react";
const companyLogo = require("../Images/LOGO-WDR.png");

export const Header = () => {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        height: "50px",
      }}
    >
      <img
        src={companyLogo}
        alt="company-logo"
        style={{ height: "40px", paddingLeft: "10px" }}
      />
    </header>
  );
};
