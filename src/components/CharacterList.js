import React, { useEffect, useState } from "react";
import CharacterCard from './CharacterCard'
import axios from 'axios'
import SearchForm from './SearchForm'


export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1)
  const[url, setUrl] = useState(`https://rickandmortyapi.com/api/character/?page=${page}`)
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    
    axios
    .get(url)
    .then(res=>setCharacters(res.data.results))
    .catch(error=>console.log('error', error))
  }, [setPage]);

function toApp(){
  characters.forEach(character=>{
      console.log(character)
      props.setChar(character)
      console.log('this is set Char',props.setChar)
    }
  )
}
toApp()
// const filteredChar = (input,characterName) =>{

// }
  return (
    <section className="character-list">
      <SearchForm/>
      {characters.map((character)=>
      <CharacterCard name={character.name} status={character.status} gender={character.gender} originName={character.origin.name} locationName={character.location.name}/>
      )}
    </section>
  );
}
