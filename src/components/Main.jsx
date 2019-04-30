import React from "react";

import Input from "./Input";
import Widget from "./Widget/Main";
import Grid from "@material-ui/core/Grid";
// import { withStyles } from '@material-ui/core/styles';

const Main = props => {
  return (
    <div>
      <Input
        change={props.change}
        value={props.value}
        cities={props.cities}
        addCity={props.addCity}
        handleSetInputValue={props.handleSetInputValue}
        selected={props.selected}
      />
      <Grid container spacing={8}>
        {props.data.map(item => (
          <Widget key={item.id} data={item} deleteCity={props.deleteCity}/>
        ))}
      </Grid>
    </div>
  );
};

export default Main;
