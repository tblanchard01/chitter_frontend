import React from "react";
class PostPeep extends React.Component {
  render() {
    return (
      <div className="post_peep_box">
        <h2> Welcome User </h2>
        <form action="/user_peep" method="post">
          <textarea name="user_peep" className="peepinput" />
          <input type="submit" value="Peep" />
        </form>
      </div>
    );
  }
}

export default PostPeep;
