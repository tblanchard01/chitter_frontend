import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      peeps: []
    }
  }

  render() {
    return (

      <div className="App">
      <h1> Welcome to Chitter V2.0 </h1>
       
       <div className = "leftbox">
       leftbox    
     </div>  

     <div className = "rightbox">
       rightbox 
     </div>

      </div>
    );
  }
}

export default App;
