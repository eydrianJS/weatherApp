import React from "react";
import PropTypes from "prop-types";
import HeaderCard from './Card/HeaderCard'
import { withStyles, Card, CardContent , Typography} from "@material-ui/core";
import { styles } from '../Styles/MainWidgetStyles'

function Main(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <HeaderCard data={props.data} deleteCity={props.deleteCity}  updateCity={props.updateCity}/>
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
