import React, { useState } from "react";

function Statefun() {
  //Destructuring
  
  const [message, setMessage] = useState("Hello World");
  const handleClick = () => {
    setMessage("hI ALL");
  };
  return (
    <div>
      <h1>{message}</h1>
      <button style={{background:"black",color:"white"}} onClick={() => handleClick()}>Action</button>
    </div>
  );
}

export default Statefun;
