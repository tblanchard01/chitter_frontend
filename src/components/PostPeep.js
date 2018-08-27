import React from "react";
class PostPeep extends React.Component {
  state = {}
  render() {
    if (this.props.username) {
      return (
        <div className="post_peep_box">
          <h2> Welcome {this.props.username} </h2>
          <form action="/user_peep" method="post">
            <textarea name="user_peep" className="peepinput" />
            <input type="submit" value="Peep" />
          </form>
        </div>

      );
    }

    return <div className="post_peep_box"><h2>Please create username to peep!</h2></div>

  }
}

export default PostPeep;
