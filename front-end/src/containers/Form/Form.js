import React from "react";
import "./Form.css";
class Form extends React.Component {
  constructor() {
    super();
  }
  render() {
		const {openFormHandler} = this.props
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
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="new title"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="category"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    placeholder="description"
                    rows="3"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
