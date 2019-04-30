import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Cached from "@material-ui/icons/Cached";
import DeleteForever from "@material-ui/icons/DeleteForever";
import WbSunny from "@material-ui/icons/WbSunny";
// import CloudQueue from "@material-ui/icons/CloudQueue";

const styles = {
  card: {
    minWidth: 200,
    margin: 20,
    padding: 0,
  },
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
  icon: {
    float:"left",
    margin: 5
  },
  button: {
    margin: 0,
    padding: 0,
    minWidth: "0px"
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
      <CardContent className={classes.headerZone}>
        <CardContent className={classes.temperatureZone}>
          <WbSunny className={classes.icon} /> <br/>
          {`Temp ${props.data.cloudPercentage} °`}
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button size="small" className={classes.button}>
            <Cached className={classes.icon} />
          </Button>
          <Button size="small" className={classes.button}>
            <DeleteForever className={classes.icon} />
          </Button>
        </CardActions>
      </CardContent>
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
