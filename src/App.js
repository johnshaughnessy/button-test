import React, { Component } from "react";
import {hot} from "react-hot-loader";
import "./App.css";

const name = "Jonicoma";
class App extends Component{
  render(){
    return(
      <div className="App">
        <h1 className="text">Hello, {name}!</h1>
      </div>
    );
  }
}

export default App;
