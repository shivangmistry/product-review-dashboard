import React from "react";
import Logo from "../Logo/Logo";
import "./app-header.css";

function AppHeader() {
  return (
    <div className="container app-header">
      <Logo alt="Company logo" width="30px" height="30px" />
      <div className="header-title">Stackline</div>
    </div>
  );
}

export default AppHeader;
