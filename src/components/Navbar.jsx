import React, { useState } from "react";
import "../styles/Nav.css";
import '../styles/Theme.css';

function Navbar() {

  return (
    <nav className='navbar'>
      <div className="container-fluid">
        <div className="search-container">
          <input type="text" placeholder="Search.." className="search" />
          <img
            src="\src\assets\search.png"
            height="35"
            className="searchLogo"
            alt="Search"
          />
          <img
            src="\src\assets\microp.png"
            height="35"
            className="searchLogo"
            alt="Mic"
          />
        </div>
        <div className="icon-group">
          <img
            src="\src\assets\add-video.png"
            height="35"
            className="addVid"
            alt="Add Video"
          />
          <img
            src="\src\assets\active.png"
            height="35"
            className="notification"
            alt="Active"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShSDS53jL1trxSqWwGCQCMQthCDV6T5WvjtA&usqp=CAU"
            height="35"
            className="profile"
            alt="Profile"
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;