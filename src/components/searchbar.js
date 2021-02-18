import React from "react";

function Searchbar() {
  return (
    <div className="container my-4">
      <div className="row search-container">
        <form className="my-1 col-lg-6 col-sm-12 col-md-12">
          <div className="input-fields d-flex">
              <div className="input-container input-group">
                <button
                  type="button"
                  className="btn input-group-prepend search-btn btn-lg"
                >
                  <i className="fa fa-search" aria-hidden="true"></i>
                </button>
                <input
                  type="text"
                  name="Query"
                  placeholder="Search for process, channel etc"
                  className="form-control search-input-field"
                />
              </div>
          </div>
        </form>
        <div className="my-1 col-lg-6 col-sm-12 col-md-12 text-right">
          <button className="btn px-4 py-1 bg-transparent demographic-btn">
            Demographic Graph
          </button>
        </div>
      </div>
    </div>
  );
}

export default Searchbar;
