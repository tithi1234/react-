import React from "react";

function Propsex(props) {
  console.log(props);
  return (
    <div>
      <h1>
        Hello {props.name} And {props.age}
      </h1>
      {props.children}
    </div>
  );
}

export default Propsex;
