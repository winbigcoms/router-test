import React from "react";
import { withRouter } from "react-router-dom";

function LoginBtn ({history}){
  return (
    <div>
      <button onClick={click}>로그링</button>
    </div>
  )
  function click() {
    setTimeout(()=>{
      history.push("/");
    },1000)
  }
}
export default withRouter(LoginBtn);  