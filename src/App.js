import React, { Component } from "react";
import "./App.css";
// import Peep from "./components/peep";
// import Login from "./components/login";
// import PostPeep from "./components/PostPeep";
import fetch from "node-fetch";

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
        <h1> Welcome to Chitter V2.0 </h1>

        <div className="peep_viewer" />
      </div>
    );
  }
}

export default App;
