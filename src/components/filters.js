import React from "react";

function Filters() {
  return (
    <div className="container px-4">
      <div className="row text-left">
        <div className="col dropdown p-0">
          <button
            className="btn btn-block dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Experience
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="https://github.com">
              Action
            </a>
            <a className="dropdown-item" href="https://github.com">
              Not Implemented
            </a>
          </div>
        </div>
        <div className="col dropdown p-0">
          <button
            className="btn btn-block dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Industry
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="https://github.com">
              Action
            </a>
            <a className="dropdown-item" href="https://github.com">
              Not Implemented
            </a>
          </div>
        </div>
        <div className="col dropdown p-0">
          <button
            className="btn btn-block dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Gender
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="https://github.com">
              Action
            </a>
            <a className="dropdown-item" href="https://github.com">
              Not Implemented
            </a>
          </div>
        </div>
        <div className="col dropdown p-0">
          <button
            className="btn btn-block dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Education
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="https://github.com">
              Action
            </a>
            <a className="dropdown-item" href="https://github.com">
              Not Implemented
            </a>
          </div>
        </div>
        <div className="col p-0 dropdown">
          <button
            className="btn btn-block dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Language
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="https://github.com">
              Action
            </a>
            <a className="dropdown-item" href="https://github.com">
              Not Implemented
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-sm-12 col-md-12 col-md-12 text-right">
          <div className="">
            <input
              type="checkbox"
              aria-label="Checkbox for following text input"
            />
            &nbsp;
            <small>Agent having laptop/desktop</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filters;
