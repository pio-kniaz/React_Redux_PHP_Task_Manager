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
				<div className="row">
					<div className="Alltasks__left col-md-4 col-sm-12">
						{tasks.map((obj, index) => {
							return (
								<div className="Alltasks__box" key={index}>
								{obj.title}
							</div>);
						})}

					</div>
					<div className="Alltasks__right col-md-8 col-sm-12">

					</div>
				</div>
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
