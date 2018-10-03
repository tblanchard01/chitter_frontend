import React from "react";
class PostPeep extends React.Component {
  submitLogin(e) {
    e.preventDefault();
    fetch("https://chitter-backend-api.herokuapp.com/peeps", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            user: {
                handle: this.state.handle,
                password: "blah blah"
                //need to put session id here 
            }
        })
    })
        .then(res => res.json())
        .then(json => {
            //"has already been taken"
            console.log(json);
            if (json.handle !== "has already been taken") {
                this.setState({
                    username: json.handle,
                    id: json.id
                });
                const loginCallback = this.props.onLogin;
                loginCallback(json.handle);
            } else {
                this.setState({ error_flag: true })

            }
        }
        );
}

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


// {"id":26,"body":"my first peep :)","created_at":"2018-07-29T18:39:32.607Z","updated_at":"2018-07-29T18:39:32.607Z","user":{"id":18,"handle":"tes"},"likes":[]}


// curl "https://chitter-backend-api.herokuapp.com/peeps" \
//   -X POST \
//   -H "Authorization: Token token=a_valid_session_key" \
//   -H "Content-Type: application/json" \
//   -d '{"peep": {"user_id":1, "body":"my first peep :)"}}'