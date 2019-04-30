import React from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit,
    backgroundColor: "#ff9f3f"
  },
  extendedIcon: {
    marginRight: theme.spacing.unit
  }
});

const Add = props => {
  const { classes } = props;
  return (
    <Fab aria-label="Add" className={classes.fab}>
      <AddIcon onClick={props.addCity} />
    </Fab>
  );
};

Add.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Add);
