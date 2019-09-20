import React from "react";

export default function CharacterCard(props) {
  return(
  <div>
    <h1>{props.name}</h1>  
    <h3>Status: {props.status}</h3>
    <p> I am a {props.gender} from {props.originName} living in {props.locationName}</p>
  </div>
  )
}
