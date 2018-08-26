import React from "react"
class Login extends React.Component{
    render(){
        return(
            <div className ="loginbox">
      <form action = "/login" method = "post">
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