import React, { Component } from 'react';
import LifecycleB from './LifecycleB';

export class LifecycleA extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name:"Ayan"
      }
      console.log("LifecycleA constructor");
    }

    static getDerivedStateFromProps(props,state){
        console.log("LifecycleA getDerviedStateFromProps");
        return null

    }

    componentDidMount(){
        console.log("LifecyceleA componentDidMount");
    
    }

    
  render() {
      console.log("LifecycleA render");
    return (
        <div> 
        <div>LifeCycle A</div>
    <LifecycleB/>
    </div>
    )
  }
}

export default LifecycleA;
