import React from "react";
import PropTypes from "prop-types"
import DeleteForever from "@material-ui/icons/DeleteForever"
import { withStyles, Button } from "@material-ui/core";
import { styles } from "../../Styles/DeleteStyles"

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
