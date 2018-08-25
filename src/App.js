import React, { Component } from 'react';
import './App.css';
import Peep from './components/peep';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      peeps: []
    }
  }

  componentDidMount(){
    const url = 'https://chitter-backend-api.herokuapp.com/peeps.json'
    fetch(url)
    .then(response => response.json())
    .then((data) =>{
      this.setState({
        peeps:data
      })
    })
  }

  render() {
    return (

      <div className="App">
      <h1> Welcome to Chitter V2.0 </h1>
       
       <div className = "leftbox">
         <h1> Welcome User </h1>
        <form action = "/user_peep" method = "post">
      <textarea name = "user_peep" class ="peepinput" >

       </textarea>
       <input type = "submit" value = "Peep"></input>
         </form>     
     </div>  

     <div className = "rightbox">
       {this.state.peeps.map((peep) => {
         return <Peep peep = {peep} ></Peep>
       })}
     </div>

      </div>
    );
  }
}

export default App;
