import React from "react";

export default function Profile(props){
  console.log(props);
  const id = Number(props.match.params.id);
  if(isNaN(id)){
    return(
      <div>
        프로필
      </div>
    )
  }
  return(
    <div>
      프로필 id:{id}
    </div>
  )
}