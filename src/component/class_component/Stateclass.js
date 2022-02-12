import React, { Component } from 'react'

 class State extends Component {
       
    constructor(props) {
        super(props)
    
        this.state = {
            message:"clicked",
        }
    }
    
     changeMessage(){
         this.setState({
           message:"button clicked",
          
         }
        )

    }
     clickHandler(){

        console.log("button clicked");
    }
   
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <h1>increment {this.state.count}</h1>
                <button onClick={()=> this.changeMessage()}>Click this incre</button>
                <button onClick={()=> this.clickHandler()}>Click this incre</button>
                
            </div>
        )
    }
}

export default State;
