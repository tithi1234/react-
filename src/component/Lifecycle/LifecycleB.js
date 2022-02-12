import React, { Component } from 'react';

export class LifecycleB extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name:"Ayan"
      }
      console.log("LifeCycleB constructor");
    }

    static getDerivedStateFromProps(props,state){
        console.log("LifeCycleB getDerviedStateFromProps");
        return null

    }

    componentDidMount(){
        console.log("LifecycleB componentDidMount");
    }

    
  render() {
      console.log("LifeCycleB render");
    return (
        <div>LifeCycle B</div>
    )
  }
}

export default LifecycleB;
