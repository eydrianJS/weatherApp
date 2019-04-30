import React from "react";
import Add from "./Buttons/Add";
import Input from "./Input";
import Widget from "./Widget/Main";
import Grid from '@material-ui/core/Grid';
// import { withStyles } from '@material-ui/core/styles';


const Main = props => {

  return (
    <div>
      <Input change={props.change} value={props.value} />
      <Add addCity={props.addCity}/>
      <Grid container spacing={8}>
            {props.data.map(item => (
                <Widget key={item.id} data={item} />
            ))}
        </Grid> 
      {props.cities.map(item => (
        <div>{item.name}</div>
      ))}
    </div>
  );
};

export default Main;
