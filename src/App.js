import React, {useState} from "react";
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList'
import {Route} from 'react-router-dom'


export default function App() {
  const [characters, setCharacters] = useState( [] );

  const addToCharacters = character => {
    setCharacters( [...characters, character] );
  }
  console.log(characters)
  return (
    <main>
      <Route exact path='/' component={Header}/>
      <Route path='/characters' render={(props)=><CharacterList {...props} setChar={setCharacters}/>}/>
    </main>
  );}
