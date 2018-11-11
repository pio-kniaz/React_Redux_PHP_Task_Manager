import React from "react";
import "./Builder.css";
import Navigation from "../../components/Navigation/Navigation";
import Dashboard from "../Dashboard/Dashboard";
class Builder extends React.Component {
  render() {
    return (
      <div className="Builder">
        <Navigation />
        <Dashboard />
      </div>
    );
  }
}

export default Builder;
