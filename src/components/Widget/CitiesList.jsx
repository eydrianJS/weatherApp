import React from "react";
import PropTypes from "prop-types";
import { withStyles, MenuItem, Paper, MenuList } from "@material-ui/core";
import { styles } from "../Styles/CitiesListStyles"

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
