import React from "react";

const Main = props => {
  return (
    <div>
      {props.data.name}
      {props.data.cloudPercentage}
    </div>
  );
};

export default Main;
