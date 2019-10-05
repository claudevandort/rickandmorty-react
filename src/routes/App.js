import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from '../components/Header'
import Characters from '../components/Characters'
import Episodes from '../components/Episodes'

const App = () => ([
    <Header key={1} title="Rick and Morty" />,
    <BrowserRouter key={2}>
        <Route exact path="/characters" component={Characters} />
        <Route exact path="/episodes" component={Episodes} />
    </BrowserRouter>
])

export default App