import React from "react";
import Form from "../../containers/Form/Form";
import { connect } from "react-redux";
import { openForm } from "../../actions/formActions";
import "./Navigation.css";
class Navigation extends React.Component {
	openFormHandler=()=>{
		console.log('tst');
		this.props.openForm()
	}
  render() {
    const { form } = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className=" container collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <button type="button" className="btn btn-primary">
                Primary
              </button>
            </li>
            <li className="nav-item">
              <button type="button" className="btn btn-primary">
                Primary
              </button>
            </li>
            <li className="nav-item">
              <button type="button" className="btn btn-primary">
                Primary
              </button>
            </li>
            <li className="nav-item">
              <button type="button" className="btn btn-primary">
                Primary
              </button>
            </li>
            <li className="nav-item">
              <button onClick={this.openFormHandler} type="button" className="btn btn-warning">
                Add New Task
              </button>
            </li>
          </ul>
          {form && <Form />}
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    form: state.form.visible
  };
};

export default connect(mapStateToProps,{openForm})(Navigation);
