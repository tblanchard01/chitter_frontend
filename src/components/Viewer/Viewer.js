import React, {Component} from "react"
import Peep from "../Peep/Peep.js"


import "./Viewer.css"
class Viewer extends Component{
    render(){
        return(
            <div className="peep_viewer">
            <span>search:</span>
            <input onChange={e => this.handleSearchTerm(e.target.value)} />
            {this.props.peeps.map(peep => {
              return <Peep peep={peep} key={this.props.peeps.indexOf(peep)} />;
            })}
          </div>
        )
    }
}

export default Viewer