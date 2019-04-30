import React from "react";
import Add from "./Buttons/Add";
import Input from "./Input";
import Widget from "./Widget/Main";

const Main = props => {
  return (
    <div>
      <Input change={props.change} value={props.value} />
      <Add />
      {props.data.map(item => (
        <Widget key={item.id} data={item} />
      ))}
      {props.cities.map(item => (
        <div>{item.name}</div>
      ))}
    </div>
  );
};

export default Main;
