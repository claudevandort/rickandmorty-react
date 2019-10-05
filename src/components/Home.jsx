import React from 'react'
import Header from './Header'
import Character from './Character'
import Container from './Container'
import useRMAPI from '../hooks/useRMAPI'

const api_path = '/character'

const Home = () => {
    const characters = useRMAPI(api_path)
    return([
        <Header key="1" title="Rick and Morty" />, 
        <Container key="2" title="Characters">
            {characters.map(character =>
                <Character key={character.id} name={character.name} image={character.image} />
            )}
        </Container>
    ])
}

export default Home