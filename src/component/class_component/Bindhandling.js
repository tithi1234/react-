import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };
    // Approach no 2
    // this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler = () => {
    this.setState({
      message: "GoodBye",
    });
    console.log(this);
  };

  render() {
    return (
      <div>
        <div>{this.state.message}</div>

        {/* Approach no 1 */}
         <button onClick={this.clickHandler.bind(this)}>Click me</button> 
        {/* <button onClick={() => this.clickHandler()}>Click me</button> */}
        {/* Approach 3 */}
       {/* <button onClick={this.clickHandler}>Click me</button>*/}
      </div>
    );
  }
}

export default EventBind;
