import React, { useState, useEffect } from 'react'
import Header from './Header'
import Character from './Character'
import Container from './Container'

const App = () => {
    const [characters, setCharacters] = useState([])
    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())
            .then(data => setCharacters(data.results))
    }, [])
    console.log(characters)
    return([
        <Header title="Rick and Morty" />, 
        <Container title="Characters">
            {characters.map(character =>
                <Character name={character.name} image={character.image} />
            )}
        </Container>
    ])
}

export default App