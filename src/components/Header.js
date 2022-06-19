import React from "react";
import "../styles/Header.css";
const companyLogo = require("../Images/LOGO-WDR.png");

export const Header = () => {
  return (
    <header id="page-header">
      <img src={companyLogo} alt="company-logo" className="page-header-logo" />
    </header>
  );
};
