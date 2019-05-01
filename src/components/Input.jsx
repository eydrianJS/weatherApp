import React from "react";
import PropTypes from "prop-types";
import CitiesList from "./Widget/CitiesList";
import Add from "./Buttons/Add";
import { withStyles, TextField } from "@material-ui/core";
import { styles } from "./Styles/InputStyles";

const Search = props => {
  const { classes } = props;

  return (
    <div className={classes.elementsInput}>
      <TextField
        id="standard-name"
        label="Wpisz miasto"
        autoComplete="off"
        className={classes.textField}
        value={props.value}
        onChange={props.change}
        onBlur={props.focusOut}
        margin="normal"
      />
      <Add addCity={props.addCity} />
      {props.error.length ? (
        <div className={classes.error}>{props.error}</div>
      ) : (
        false
      )}
      {props.cities.length > 0 && props.selected ? (
        <CitiesList
          cities={props.cities}
          handleSetInputValue={props.handleSetInputValue}
          className={classes.cities}
        />
      ) : (
        false
      )}
    </div>
  );
};
Search.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Search);
