import React from 'react'
import Episode from './Episode'
import Container from './Container'
import useRMAPI from '../hooks/useRMAPI'

const api_path = '/episode'

const Episodes = () => {
    const episodes = useRMAPI(api_path)
    return(
        <Container title="Episodes">
            {episodes.map(episode =>
                <Episode key={episode.id} name={episode.name} episode={episode.episode} air_date={episode.air_date} />
            )}
        </Container>
    )
}

export default Episodes