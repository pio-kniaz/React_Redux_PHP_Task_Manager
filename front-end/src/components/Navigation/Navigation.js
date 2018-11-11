import React from "react";
import "./Navigation.css";
const Navigation = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className=" container collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <button type="button" class="btn btn-primary">
              Primary
            </button>
          </li>
          <li className="nav-item">
            <button type="button" class="btn btn-primary">
              Primary
            </button>
          </li>
          <li className="nav-item">
            <button type="button" class="btn btn-primary">
              Primary
            </button>
          </li>
          <li className="nav-item">
            <button type="button" class="btn btn-primary">
              Primary
            </button>
          </li>
        </ul>
      </div>
      {/* <div className="Navigation__box"><span className="Navigation__close">X</span> <span className="Navigation__title">Home</span> </div>
	<div className="Navigation__box"><span className="Navigation__close">X</span> <span className="Navigation__title">Work</span></div>
	<div className="Navigation__box"><span className="Navigation__close">X</span> <span className="Navigation__title">Programin</span></div>
	<div className="Navigation__box"><span className="Navigation__close">X</span> <span className="Navigation__title">Shopping List</span></div>
	<div className="Navigation__box"><span className="Navigation__close">X</span> <span className="Navigation__title">Music</span></div> */}
    </nav>
  );
};
export default Navigation;
