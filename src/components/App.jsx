import React from 'react'
import Header from './Header'
import Character from './Character'
import Container from './Container'

const App = () => [
    <Header title="Rick and Morty" />, 
    <Container title="Characters">
        <Character name="Rick Sanchez" />
    </Container>
]

export default App