import React from "react"
import fetch from 'node-fetch';

class Login extends React.Component{
    render(){
        this.submit_login = function(){
            fetch('http://httpbin.org/post', { method: 'POST', body: JSON.stringify({
                    id: 888,
                   handle: 'blah blah',
                  }) })
            .then(res => res.json())
           .then(json => console.log(json));
        }
        return(
            <div className ="loginbox">
      <form action = {this.submit_login()}>
      <label for="login_input"> login</label>
      <textarea name = "login_input" class ="login_input" >
      </textarea>
      <label for="password_input"> password </label>

      <textarea name = "password_input" class ="login_input" >
      </textarea>
       <input type = "submit" value = "login"></input>
         </form>     
       </div>
        )
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


