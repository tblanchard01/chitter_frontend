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
      peeps: []
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

apples (){
  console.log(this.state.peeps)
  var updatedList = this.state.peeps;
updatedList = updatedList.filter(function(item){
  return item.toLowerCase().search("peep".toLowerCase()) !== -1;
});
this.setState({peeps: updatedList});

}
  
  render() {
    return (
      <div className="App">
        <Login />
        <PostPeep />

        <h1> Welcome to Chitter V2.0 </h1>

        <div className="peep_viewer">
        <span>search:</span>
        <input />
        
          {this.state.peeps.map(peep => {
            return <Peep peep={peep} />;
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
