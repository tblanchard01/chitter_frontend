import React from "react";
import fetch from "node-fetch";

class Login extends React.Component {
  submitLogin(e) {
    e.preventDefault();
    fetch("https://chitter-backend-api.herokuapp.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: {
          handle: "tim",
          password: "blah blah"
        }
      })
    })
      .then(res => res.json())
      .then(json => console.log(json));
  }

  render() {
    return (
      <div className="loginbox">
        <form onSubmit={e => this.submitLogin(e)}>
          <label> login</label>
          <input name="login_input" className="login_input" />
          <label> password </label>

          <input name="password_input" className="login_input" />
          <input type="submit" value="login" />
        </form>
      </div>
    );
  }
}

export default Login;

// const submit_data = function(){
//     fetch('https://chitter-backend-api.herokuapp.com/users', {
//   method: 'POST',
//   headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     id: 888,
//     handle: 'blah blah',
//   })
// })
// }
