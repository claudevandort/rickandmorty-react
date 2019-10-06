import React from 'react'
import Episode from './Episode'
import Container from './Container'
import { connect } from 'react-redux'

const Episodes = ({ episodes }) => {
    return(
        <Container title="Episodes">
            {episodes.map(episode =>
                <Episode key={episode.id} name={episode.name} episode={episode.episode} air_date={episode.air_date} />
            )}
        </Container>
    )
}

const mapStateToProps = state => {
    return {
        episodes: state.episodes
    }
}

export default connect(mapStateToProps, null)(Episodes)