import React from 'react'
import Header from './Header'
import Character from './Character'
import Container from './Container'
import useRMAPI from '../hooks/useRMAPI'

const api_path = '/character'

const Characters = () => {
    const characters = useRMAPI(api_path)
    return(
        <Container title="Characters">
            {characters.map(character =>
                <Character key={character.id} name={character.name} image={character.image} />
            )}
        </Container>
    )
}

export default Characters