import React from "react";
//import logo from './logo.svg';
import "./App.css";
import Jsxex from "./component/functinal_component/Jsxex";
import Greet from "./component/class_component/props/Greet";
import { Fun } from "./component/functinal_component/props/Fun";
import New from "./component/class_component/state/New";
import FuncCompEx from "./component/task/FuncCompEx";
import Statefun from "./component/functinal_component/state/Statefun";
import Propsex from "./component/functinal_component/props/Propsex";
import Stateclass from "./component/class_component/state/Stateclass";
import Destructuringprops from "./component/functinal_component/props/Destructuringprops";
import Message from "./component/class_component/state/Message";
import Bindhandling from "./component/class_component/Bindhandling";
import HookCounter from "./component/functinal_component/Hooks/useState/HookCounter";
//import Home from './component/functinal_component/Home';
//import LifecycleA from './component/Lifecycle/LifecycleA';
//import LifecycleB from './component/Lifecycle/LifecycleB';
//import Datetimecm from './component/task/Datetimecm';

function App() {
  return (
    <div className="App">
      <div>
        <Jsxex />
      </div>

      <h1 id="props">PROPS(class comp)</h1>
      <div class="greet">
        <div className="a3">
          <Greet name="Hi class prps" hobby="Youtube" />
        </div>
        <div className="a1">
          <Greet name="Hi properties" hobby="Reading Book" />
        </div>
        <div className="a2">
          {" "}
          <Greet name="Hi friend" hobby="Coocking" />
        </div>
      </div>
      <div className="fun">
        <Propsex name="Labani" age={25}>
          <p>This is a children props</p>
          <h3>this is children props</h3>
        </Propsex>
        <Propsex name="Tithi" age={30}>
          <button>Action</button>
        </Propsex>
        <Propsex name="Ayan" age={15} />
      </div>

      <div class="fun">
        <h1 id="props">PROPS(Functional comp)</h1>
        <Fun comment="oops!" />
      </div>

      <div style={{ color: "white", background: "blue", padding: "20px" }}>
        <h1 id="props">UseState example with functional component</h1>
        <Statefun name="button click" />
      </div>
      <div style={{ color: "yellow", background: " #ff0080", padding: "20px" }}>
        <h1>State xample with class component</h1>
        <New />
        <Stateclass />
      </div>

      <div style={{ color: "black", background: "yellow", padding: "20px" }}>
        <FuncCompEx />
      </div>

      <div style={{ color: "black", background: "pink", padding: "20px" }}>
        <Message />
      </div>

      <div class="des">
        <h1>Destructuring Props Example</h1>
        <Destructuringprops active="KAPIL GARG" activeStatus="CSE" />
      </div>

      <div class="bind">
        <h1>Bind Handling</h1>
        <Bindhandling />
      </div>
      <div>
        <h1>useState</h1>
        <HookCounter/>
      </div>

      {/*<LifecycleA/>
  
      <Home/>
      <Datetimecm/>*/}
    </div>
  );
}

export default App;
