import React from 'react'
import Character from './Character'
import Container from './Container'
import useRMAPI from '../hooks/useRMAPI'
import { connect } from 'react-redux'

const api_path = '/character'

const Characters = ({ characters }) => {
    //const characters = useRMAPI(api_path)
    return(
        <Container title="Characters">
            {characters.map(character =>
                <Character key={character.id} name={character.name} image={character.image} />
            )}
        </Container>
    )
}

const mapStateToProps = state => {
    return {
        characters: state.characters
    }
}

export default connect(mapStateToProps, null)(Characters)