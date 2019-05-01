import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import WbSunny from "@material-ui/icons/WbSunny";
import CloudQueue from "@material-ui/icons/CloudQueue";
import Delete from '../Buttons/Delete'
import Upadte from '../Buttons/Update'

const styles = {
    cardActions: {
      float: "right",
      margin: 5,
      padding: 5,
      display: "unset"
    },
    temperatureZone: {
      margin: 0,
      padding: 0,
      float: "left",
    },
    headerZone: {
      margin: 0,
      padding: 0,
      minHeight: 100,
      backgroundColor: "#e1e1f6"
    },
  };

const HeaderCard = (props) => {
  const { classes } = props;
  return (
    <CardContent className={classes.headerZone}>
      <CardContent className={classes.temperatureZone}>
        {props.data.cloudPercentage> 50?<WbSunny className={classes.icon} /> :<CloudQueue className={classes.icon} />}
        <br />
        {`Temp ${props.data.temperature} °`}
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Upadte />
        <Delete deleteCity={props.deleteCity} id={props.data.id} />
      </CardActions>
    </CardContent>
  );
};

HeaderCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HeaderCard);
