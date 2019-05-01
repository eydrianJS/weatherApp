import React from "react";
import PropTypes from "prop-types";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  menuItem: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& $primary, & $icon": {
        color: theme.palette.common.white
      }
    }
  },
  primary: {},
  icon: {},
  paper: {
    position: "absolute",
    zIndex: 99,
    width: 300
  }
});

function CitiesList(props) {
  const { classes } = props;

  return (
    <Paper className={classes.paper}>
      <MenuList>
        {props.cities.map(item => (
          <MenuItem
            className={classes.menuItem}
            key={item.id}
            onClick={() => props.handleSetInputValue(item.id)}
          >
            {" "}
            {item.name}{" "}
          </MenuItem>
        ))}
      </MenuList>
    </Paper>
  );
}

CitiesList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CitiesList);
