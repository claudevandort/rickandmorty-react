import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from '../components/Header'
import Home from '../components/Home'
import Characters from '../components/Characters'
import Episodes from '../components/Episodes'
import { addCharacters } from '../actions'
import { connect } from 'react-redux'

class App extends React.Component{
    componentDidMount(){
        fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())
            .then(({results: items}) => this.props.addCharacters(items))
    }
    render(){
        return ([
            <Header key={1} title="Rick and Morty" />,
            <BrowserRouter key={2}>
                <Route exact path="/" component={Home} />
                <Route exact path="/characters" component={Characters} />
                <Route exact path="/episodes" component={Episodes} />
            </BrowserRouter>
        ])
    }
}

const mapDispatchToProps = {
    addCharacters
}

export default connect(null, mapDispatchToProps)(App)