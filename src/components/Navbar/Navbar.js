import React from "react";
import productTabs from "../productTabs";
import "./navbar.css";

function Navbar(props) {
  return (
    <div className="navbar">
      <ul className="navbar-ul">
        {Object.keys(productTabs).map((tab) => {
          return (
            <li
              key={tab}
              onClick={() => props.setTab(tab)}
              className={
                "navbar-li" +
                (props.selected === tab ? " tab-selected" : " tab-not-selected")
              }
            >
              <div className="navbar-icon">{productTabs[tab].icon}</div>
              <div>{productTabs[tab].title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Navbar;
