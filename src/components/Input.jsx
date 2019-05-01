import React from "react";
import PropTypes from "prop-types";
import CitiesList from "./Widget/CitiesList";
import Add from "./Buttons/Add";
import { withStyles, TextField } from "@material-ui/core";
import { styles } from "./Styles/InputStyles"

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
        margin="normal"
        InputLabelProps={{
          classes: {
            root: classes.cssLabel,
            focused: classes.cssFocused
          }
        }}
        InputProps={{
          classes: {
            root: classes.cssOutlinedInput,
            focused: classes.cssFocused
          }
        }}
      />
      <Add addCity={props.addCity}/>
      {props.cities.length > 0 && props.selected? <CitiesList cities={props.cities} handleSetInputValue={props.handleSetInputValue}/>: false}
    </div>
  );
};
Search.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Search);
