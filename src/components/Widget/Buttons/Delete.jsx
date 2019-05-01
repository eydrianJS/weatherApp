import React from "react";
import Button from "@material-ui/core/Button";
import DeleteForever from "@material-ui/icons/DeleteForever";
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
const Delete = props => {
  const { classes } = props;
  return (
    <Button
      size="small"
      className={classes.button}
      onClick={id => props.deleteCity(props.id)}
    >
      <DeleteForever className={classes.icon} />
    </Button>
  );
};

Delete.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Delete);
