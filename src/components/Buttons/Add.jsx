import React from "react";
import PropTypes from "prop-types";
import AddIcon from "@material-ui/icons/Add";
import { withStyles, Fab } from "@material-ui/core";
import { styles } from "../Styles/AddStyles"

const Add = props => {
  const { classes } = props;
  return (
    <Fab aria-label="Add" className={classes.fab} onClick={props.addCity}>
      <AddIcon />
    </Fab>
  );
};

Add.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Add);
