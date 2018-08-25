import React from "react"; 
import "./peep.css"
class Peep extends React.Component{
    render(){
        const handle = this.props.peep.handle 
        const msg = this.props.peep.body 


        return(
            <div className = "peep_container"> 
            {/* add more in here to match rest of json attributes */}
            <div className = "peep_handle">
            {handle}

            </div>
            <div className ="peep_msg">
            {msg}

            </div>
            
            
         </div>
        )

    }
}

// https://chitter-backend-api.herokuapp.com/peeps.json


export default Peep; 