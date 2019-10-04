import React from 'react'
// import '../assets/styles/App.scss'

const Character = ({ name, image }) => (
    <div className="character">
        <img src={image} alt={name} />
        <p>{ name }</p>
    </div>
)

export default Character