import React from 'react'
import { Link } from 'react-router-dom'
import Container from './Container'

const Home = () => (
    <Container title="Home">
        <p><Link to="/characters">Characters</Link></p>
        <p><Link to="/episodes">Episodes</Link></p>
    </Container>
)

export default Home