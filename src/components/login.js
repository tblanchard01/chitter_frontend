import React from "react";
import fetch from "node-fetch";

class Login extends React.Component {
    state = {};

    submitLogin(e) {
        e.preventDefault();
        fetch("https://chitter-backend-api.herokuapp.com/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user: {
                    handle: this.state.handle,
                    password: "blah blah"
                }
            })
        })
            .then(res => res.json())
            .then(json => {
                console.log(json);
                this.setState({
                    username: json.handle,
                    id: json.id
                });
                const loginCallback = this.props.onLogin;
                loginCallback(json.handle);
            }
            );
    }

    handleLogin(login) {
        this.setState({ handle: login })
    }
    render() {
        if (this.state.username) {
            return <div className="loginbox">
                welcome:  {this.state.username}
            </div>

        } else {

            return (
                <div className="loginbox">
                    <form onSubmit={e => this.submitLogin(e)}>
                        <label> login</label>
                        <input name="login_input" className="login_input"
                            onChange={e => this.handleLogin(e.target.value)} />

                        <label> password </label>

                        <input name="password_input" className="login_input"
                            onChange={e => this.setState({ password: e.target.value })} />
                        <input type="submit" value="login" />
                    </form>
                </div>
            );
        }
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
