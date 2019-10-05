import React from 'react'
import PropTypes from 'prop-types'

const Character = ({ name, image }) => (
    <div className="character">
        <img src={image} alt={name} />
        <p>{ name }</p>
    </div>
)

Character.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string
}

export default Character