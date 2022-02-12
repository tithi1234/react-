//app.js
//import logo from './logo.svg';
import './App.css';
import Greet from './component/Greet';
import {Fun} from './component/Fun';
import Tithi from './component/Tithi';

function App() {
  return (
    <div className="App">
      <div className="gr"><Greet/></div>
      <div className="fu"><Fun/></div>
      <div className="ti"><Tithi/></div>
    </div>
  );
}

export default App;
