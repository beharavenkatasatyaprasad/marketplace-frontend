import React from "react";

function Topbar() {
  return (
    <div className="container px-4">
      <div className="row">
        <div className="col bname text-left p-1">
          <h2>MARKETPLACE</h2>
        </div>
        <div className="col login text-right p-1">
          <button className="btn px-4 py-1 bg-transparent login-btn">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
