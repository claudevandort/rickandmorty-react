import React from 'react'
import PropTypes from 'prop-types'

const Episode = ({ name, episode, air_date }) => (
    <div className="episode">
        <p>
            <b>{ episode }:</b> { name }<br />
            <i>{ air_date }</i>
        </p>
    </div>
)

Episode.propTypes = {
    name: PropTypes.string,
    episode: PropTypes.string,
    air_date: PropTypes.string
}

export default Episode