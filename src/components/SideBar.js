import React from "react";
import "./sidebar.css";
const SideBar = () => {
  return (
    <div>
      <header className="header">
        <h1 className="title">
          <h3>LOGIN</h3>
        </h1>

        <nav className="main-nav" role="navigation">
          <ul className="unstyled list-hover-slide">
            <li className="list">About</li>
            <li className="list">Work</li>
            <li className="list">Conta</li>
            <li className="list">Blog</li>
          </ul>
        </nav>
      </header>
      <div className="bottom">
       <div className="btn"> <button >logout</button></div>
        <p>helpDesk</p>

        <p>12345677</p>
      </div>
    </div>
  );
};

export default SideBar;
