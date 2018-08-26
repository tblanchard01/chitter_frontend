import React from "react"
class Post_Peep extends React.Component{
    render(){
        return(
            <div className = "post_peep_box">
         <h2> Welcome User </h2>
        <form action = "/user_peep" method = "post">
      <textarea name = "user_peep" class ="peepinput" >
          
      </textarea>
       <input type = "submit" value = "Peep"></input>
         </form>     
     </div>  
        )
    }

}

export default Post_Peep