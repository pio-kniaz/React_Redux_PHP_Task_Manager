import React from "react";
import {addTask} from "../../actions/tasksActions"
import {connect} from 'react-redux'
import "./Form.css";
class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      category: "",
      description: ""
    };
  }

  onInputValueHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
		const newTask={
			title:this.state.title,
			category:this.state.category,
			description:this.state.description
		}
		this.props.addTask(event.target,newTask)
  }
  render() {
    const { openFormHandler } = this.props;
    return (
      <div className="Form Form__modal">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">New Task</h5>
              <button onClick={openFormHandler} type="button" className="close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <input
                    onChange={this.onInputValueHandler}
                    name="title"
                    type="text"
                    className="form-control"
                    placeholder="new title"
                  />
                </div>
                <div className="form-group">
                  <input
                    onChange={this.onInputValueHandler}
                    name="category"
                    type="text"
                    className="form-control"
                    placeholder="category"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    onChange={this.onInputValueHandler}
                    name="description"
                    className="form-control"
                    placeholder="description"
                    rows="3"
                  />
                </div>
                <button className="btn btn-success">Add! </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null,{addTask})(Form);
