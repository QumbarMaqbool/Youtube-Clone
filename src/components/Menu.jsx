import React from "react";
import "../styles/Menu.css";

function Menu({ menu }) {
  return (
    <div className="menu-container">
      {menu.map((menuItem, index) => (
        <button
          type="button"
          className="btn btn-sm btn-secondary"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          data-bs-title="Tooltip on top"
          key={index}
        >
          {menuItem}
        </button>
      ))}
    </div>
  );
}

export default Menu;
