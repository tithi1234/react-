import React, { Component } from "react";

class Message extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Welcome Class",
      count: 0,
    };
  }

  changeMessage() {
    this.setState({
      message: "Thank you for class attend",
    });
  }
  // increment() {
  //   this.setState(
  //     {
  //       count: this.state.count + 5,
  //     },
  //     () => {
  //       console.log("callback value", this.state.count);
  //     }
  //   );
  //   console.log("count value", this.state.count);
  // }
  increment() {
    this.setState((prevState, props) => ({
      count: prevState.count + 1,
    }));
    console.log("incr value", this.state.count);
  }
  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }
  render() {
    return (
      <>
        <h1>{this.state.message}</h1>
        <br />
        <h1>{this.state.count}</h1>

        <button onClick={() => this.changeMessage()}>Action</button>
        <button onClick={() => this.increment()}>increment</button>
        <button onClick={() => this.incrementFive()}>incrementFive</button>
      </>
    );
  }
}

export default Message;
