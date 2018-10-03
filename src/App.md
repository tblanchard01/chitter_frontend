import React, { Component } from "react";
import "./App.css";
import Peep from "./components/peep";
import Login from "./components/login";
import PostPeep from "./components/PostPeep";
import fetch from "node-fetch";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peeps: [],
      searchTerm: ""
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

  handleSearchTerm(search) {
    this.setState({ searchTerm: search });
  }

  handleLogin(username) {
    this.setState({ username: username });
  }

  handleSessionKey(key){
    this.setState({sessionKey: key })
  }

  render() {
    return (
      <div className="App">
        <Login onLogin={x => this.handleLogin(x)} />
        <PostPeep username={this.state.username} />

        <h1> Welcome to Chitter V2.0 </h1>

        <div className="peep_viewer">
          <span>search:</span>
          <input onChange={e => this.handleSearchTerm(e.target.value)} />
          {this.state.peeps.filter(x => x.body.toLowerCase().includes(this.state.searchTerm)).map(peep => {
            return <Peep peep={peep} key={this.state.peeps.indexOf(peep)} />;
          })}
        </div>
      </div>
    );
  }
}

export default App;

// curl "https://chitter-backend-api.herokuapp.com/users" \
//   -X POST \
//   -H "Content-Type: application/json" \
//   -d '{"user": {"handle":"kay", "password":"mypassword"}}'
