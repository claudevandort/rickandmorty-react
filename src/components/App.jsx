import React from 'react'
import Header from './Header'
import Character from './Character'
import Container from './Container'

const App = () => [
    <Header title="Rick and Morty" />, 
    <Container title="Characters">
        <Character name="Rick Sanchez" image="https://rickandmortyapi.com/api/character/avatar/1.jpeg" />
    </Container>
]

export default App