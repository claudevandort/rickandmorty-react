import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Characters from '../components/Characters'
import Episodes from '../components/Episodes'

const App = () => (
    <BrowserRouter>
        <Route exact path="/characters" component={Characters} />
        <Route exact path="/episodes" component={Episodes} />
    </BrowserRouter>
)

export default App