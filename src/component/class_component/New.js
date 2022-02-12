import React, { Component } from 'react'

 class State extends Component {
     constructor(props){
         super(props);

         this.state = {
         message: "Welcome state",
         count:0,
         };

         
    }
    changeMessage(){
        this.setState({
          message:"Welcome back to react",
          
        }
       )

    }
    changeIncrement(){
        this.setState({
            count: this.state.count + 1
          })
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <h1>increment {this.state.count}</h1>
                <button onClick={()=> this.changeMessage()}>Action</button>
                <button onClick={()=> this.changeIncrement()}>Click this incre</button>
            </div>
        )
    }
}

export default State
