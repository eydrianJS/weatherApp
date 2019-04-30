import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import CitiesList from "./Widget/CitiesList";
import Add from "./Buttons/Add";

const styles = theme => ({
  cssLabel: {
    "&$cssFocused": {
      color: "#ff9f3f"
    }
  },
  cssFocused: {},
  cssUnderline: {
    "&:after": {
      borderBottomColor: "#ff9f3f"
    }
  },
  cssOutlinedInput: {
    "&$cssFocused $notchedOutline": {
      borderColor: "#ff9f3f"
    }
  },
  notchedOutline: {},
  elementsInput:{
    maxWidth: 200,
    margin: "auto",
    maxWidth: 300
  }
});

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
            //   notchedOutline: classes.notchedOutline
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
