import React from "react";
import "./Peep.css";
class Peep extends React.Component {
  render() {
    const { peep } = this.props; 
    const handle = peep.user.handle;
    const msg = peep.body;

    return (
      <div className="peep_container">
        {/* add more in here to match rest of json attributes */}
        <div className="peep_handle">@{handle}:</div>
        <div className="peep_msg">{msg}</div>
      </div>
    );
  }
}

// https://chitter-backend-api.herokuapp.com/peeps.json

export default Peep;
