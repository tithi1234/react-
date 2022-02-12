import React from 'react'
//import logo from './logo.svg';
import './App.css';
 import Greet from './component/class_component/props/Greet';
 import {Fun} from './component/functinal_component/props/Fun';
//import New from './component/class_component/New';
// import Statefun from './component/functinal_component/Statefun';
import Stateclass from './component/class_component/Stateclass';
//import Home from './component/functinal_component/Home';
//import LifecycleA from './component/Lifecycle/LifecycleA';
//import LifecycleB from './component/Lifecycle/LifecycleB';
//import Datetimecm from './component/task/Datetimecm';

function App() {
  return (
    <div className="App">
      <Greet name="Hi properties" hobby="Reading Book"/>
      <Greet name="Hi class prps" hobby="Youtube"/>
      <Greet name="Hi friend" hobby="Coocking"/>
      <Fun comment="oops!"/>
    
      {/*<New/>
  <Statefun name="button click"/>
  
  <LifecycleA/>
  
      <Home/>
      <Datetimecm/>*/}
      <Stateclass/>
    </div>
  );
}


export default App;
