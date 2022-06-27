import React from "react";
import { NavLink } from "react-router-dom";
function Header(props) {
  return (
    <>
      <header className="d-flex justify-content-center  py-3 bg-info">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <NavLink to="/addata" className="nav-link " aria-current="page">
              Add
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/editdata" className="nav-link">
              Edit
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/deletedata" className="nav-link">
              Deleted
            </NavLink>
          </li>
        </ul>
      </header>
    </>
  );
}

export default Header;
