import React from "react";
import Logo from "../imgs/logo.png";

function Topbar() {
  return (
    <div className="container px-4">
      <div className="row">
        <div className="col bname text-left p-1">
          <img src={Logo} alt="Marketplace" width="350"/> 
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
