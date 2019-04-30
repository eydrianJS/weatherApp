import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Input from '@material-ui/core/Input';

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
});

const Search = props => {
  const { classes } = props;

  return (
    <TextField
      id="standard-name"
      label="Wpisz miasto"
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
          focused: classes.cssFocused,
          notchedOutline: classes.notchedOutline
        }
      }}
    />
  );
};
Search.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Search);
