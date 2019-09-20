import React, {useState, useEffect} from "react";
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList'
import {Route} from 'react-router-dom'
import axios from 'axios'
import SearchForm from './components/SearchForm'

export default function App() {

  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1)
  const[url, setUrl] = useState(`https://rickandmortyapi.com/api/character/?page=${page}`)
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = ([])
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    
    axios
    .get(url)
    .then(res=>{setCharacters(res.data.results)
      setSearchResults(res.data.results)})
    .catch(error=>console.log('error', error))
  }, [setPage]);
  function updateCharacters(input){
    const updatedChar = []
    return characters.filter(character=> (character.name).toLowerCase().indexOf(input)!=-1)

  }
  const handleChange = event => {
    setSearchTerm(event.target.value);
    const finalchars = updateCharacters(event.target.value)
    setCharacters(finalchars)
  };
  return (
    <main>
      <Route exact path='/' component={Header}/>
      <Route path='/characters' render={(props)=><SearchForm {...props} handleChange={handleChange} searchTerm={searchTerm}/>}/>
      <Route path='/characters' render={(props)=><CharacterList {...props} setChar={setCharacters} characters={characters}/>}/>
    </main>
  );}
