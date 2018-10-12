import React, { Component } from 'react';
import "./App.css" 
import "./components/Viewer/Viewer"
import fetch from "node-fetch";
import Viewer from "./components/Viewer/Viewer";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peeps: [],
      username: "",
      userid: "",
      sessionKey: ""
    };
  }

  componentDidMount() {
    const url = "https://chitter-backend-api.herokuapp.com/peeps.json";
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          peeps: data
        });
      });
  }

  render() {
    return (
      <div className="App">
        <h1> Welcome to Chitter V24848.0 </h1>
       
       <Viewer peeps = {this.state.peeps}/>
        
          </div>
    );
  }
}

export default App;
