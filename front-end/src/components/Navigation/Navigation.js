import React from "react";
import "./Navigation.css";
const Navigation = props => {
  return (
    <div className="Navigation">
      <div className="Navigation__box"><span className="Navigation__close">X</span> <span className="Navigation__title">Home</span> </div>
      <div className="Navigation__box"><span className="Navigation__close">X</span> <span className="Navigation__title">Work</span></div>
      <div className="Navigation__box"><span className="Navigation__close">X</span> <span className="Navigation__title">Programin</span></div>
      <div className="Navigation__box"><span className="Navigation__close">X</span> <span className="Navigation__title">Shopping List</span></div>
      <div className="Navigation__box"><span className="Navigation__close">X</span> <span className="Navigation__title">Music</span></div>
    </div>
  );
};
export default Navigation;
