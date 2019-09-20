import React, {useState} from "react";
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList'
import {Route} from 'react-router-dom'


export default function App() {
  const [characters, setCharacters] = useState( [] );

  const addToCharacters = character => {
    setCharacters( [...characters, character] );
  }
  return (
    <main>
      <Header />
      <Route to='/characters' render={(props)=><CharacterList {...props} addToCharacters={addToCharacters}/>}/>
    </main>
  );}
