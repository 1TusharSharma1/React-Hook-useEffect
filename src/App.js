<<<<<<< HEAD
import "./App.css";
import React, { useReducer} from "react";
import { Button } from "react-bootstrap";

const reducer = (state, action) => {
  switch (action.type){
      case 'inc':
        return {count : state.count + 1};
        case 'dec':
        return {count : state.count - 1};
        case 'res':
          return {count : state.count = 0};
        default: 
        return state;
    }
  }


function App() {

  const [state, dispatch] = useReducer(reducer, {count: 0});



  // const [count, setCount] = useState(0);


  const Incrementer = () => {dispatch({type: 'inc'})};
  const Decrementer = () => {dispatch({type: 'dec'})}
  const Reseter = () => {dispatch({type: 'res'})}

 
  return (
    <div className="App">
      <div className="counter">
        <h1> Counter </h1>
      </div>

      <div className="numbers">
        <h1>{state.count}</h1>
      </div>
      <Button variant="success" onClick={Incrementer}>
        Increase Count
      </Button>
      <Button variant="warning" onClick={Decrementer}>
        Decrease Count
      </Button>
      <Button variant="danger" onClick={Reseter}>
        Reset
      </Button>
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
>>>>>>> 68d98a2 (Initialize project using Create React App)
    </div>
  );
}

export default App;
