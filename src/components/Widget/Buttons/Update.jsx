import React from "react";
import PropTypes from "prop-types";
import Cached from "@material-ui/icons/Cached";
import { withStyles, Button } from "@material-ui/core";
import { styles } from "../../Styles/UpdateStyles"

const Upadte = (props) => {
  const { classes } = props;
  return (
    <Button size="small" className={classes.button} onClick={id => props.updateCity(props.id)}>
      <Cached className={classes.icon} />
    </Button>
  );
};

Upadte.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Upadte);
