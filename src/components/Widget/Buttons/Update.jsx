import React from "react";
import Button from "@material-ui/core/Button";
import Cached from "@material-ui/icons/Cached";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  button: {
    margin: 0,
    padding: 0,
    minWidth: "0px"
  },
  icon: {
    float: "left",
    margin: 5
  }
};

const Upadte = (props) => {
  const { classes } = props;
  return (
    <Button size="small" className={classes.button}>
      <Cached className={classes.icon} />
    </Button>
  );
};

Upadte.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Upadte);
