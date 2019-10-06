import React from 'react'
import Character from './Character'
import Container from './Container'
import { connect } from 'react-redux'

const Characters = ({ characters }) => {
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