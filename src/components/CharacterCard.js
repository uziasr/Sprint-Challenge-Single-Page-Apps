import React from "react";
import styled from 'styled-components'

const Card = styled.div`
display:flex;
justify-content: space-evenly;
border: 1px whitesmoke solid;
`
export default function CharacterCard(props) {
  return(
    <div>
  <Card>
    <h1>{props.name}</h1>  
    <h3>Status: {props.status}</h3>
    </Card>
    <Card>
    <p> I am a {props.gender} from {props.originName} living in {props.locationName}</p>
  </Card>
  </div>
  )
}
