import React, { Component } from "react";
import { setError } from "../actions/weatherActions";
import { connect } from "react-redux";

class ErrorBoundary extends Component{
  constructor(props) {
    super(props);
    props.setError(true)
  }

  render() {
      return <h1>Something went wrong.</h1>;
  }
}

const mapDispatchToProps = dispatch => ({
  setError: error => dispatch(setError(error))
});

const mapStateToProps = state => ({
  error: state.error
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ErrorBoundary);
