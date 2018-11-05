import React from "react";
import { connect } from "react-redux";
import { getTasks } from "../../actions/tasksActions";
import "./Alltasks.css";
class Alltasks extends React.Component {
  componentDidMount() {
    this.props.getTasks();
  }
  render() {
    const { tasks } = this.props;
    return (
      <div className="Alltasks">
        <h2>All Tasks</h2>
        {tasks.map((obj, index) => {
          return <div key={index}>{obj.name}</div>;
        })}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    tasks: state.tasks.tasks
  };
};
export default connect(
  mapStateToProps,
  { getTasks }
)(Alltasks);
