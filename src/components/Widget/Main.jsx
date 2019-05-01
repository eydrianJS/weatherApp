import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import HeaderCard from './Card/HeaderCard'

const styles = {
  card: {
    minWidth: 200,
    margin: 20,
    padding: 0,
  },
  city: {
    float: "left",
    fontSize: "10px",
    height: "20px"
  }
};

function Main(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <HeaderCard data={props.data} deleteCity={props.deleteCity}  />
      <CardContent className={classes.city} >
          <Typography gutterBottom variant="h6" component="h6">
            {props.data.name}
          </Typography>
      </CardContent>
    </Card>
  );
}

Main.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Main);
