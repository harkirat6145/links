import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const [btn, setBtn] = useState("Enable Dark Modes");
  const toggleStyle = () => {
    if (localStorage.getItem("color") == "white") {
      localStorage.setItem("color", "grey");
      setBtn("Enable dark mode");
    } else {
      localStorage.setItem("color", "white");
      setBtn("Enable light mode");
    }
  };

  return (
    <nav
      className="navbar navbar-expand-lg "
      style={{
        background: localStorage.getItem("color"),
      }}
    >
      <div className="container-fluid">
        <a className="navbar-brand me-4" href="#">
          {props.brand}
        </a>
        <form className="display-none" role="search">
          <div className="d-flex">
            <input
              className="form-control rounded-0 me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-info rounded-0 text-white" type="submit">
              Search
            </button>
          </div>
        </form>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 justify-content-between mb-lg-0">
            <li className="nav-item">
              {/* <button
                onClick={() => {
                  navigate("/home");
                }}
              >
                Home
              </button> */}
              <Link
                className="text-decoration-none me-4 text-dark"
                to={"/home"}
              >
                {props.title}
              </Link>
            </li>
            <li className="nav-item ">
              <Link
                className="text-decoration-none me-4 text-dark"
                to={"/services"}
              >
                Service
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="text-decoration-none me-4 text-dark"
                to={"/contact"}
              >
                Contact US
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="text-decoration-none me-4 text-dark"
                to={"/dataBase"}
              >
                Data Base
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="text-decoration-none me-4 text-dark"
                to={"/Component"}
              >
                Component
              </Link>
            </li>
            <li className="nav-item">
              <div class="form-check form-switch text-dark">
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  onClick={toggleStyle}
                />
              </div>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control rounded-0 me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-info rounded-0 text-white" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
