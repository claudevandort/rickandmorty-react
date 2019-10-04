import React from 'react'
// import '../assets/styles/App.scss'

const Character = ({ name, image }) => (
    <div className="character">
        <img src={image} alt={name} />
        { name }
    </div>
)

export default Character