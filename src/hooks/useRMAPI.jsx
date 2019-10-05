import { useState, useEffect } from 'react'

const API_BASE_URL = 'https://rickandmortyapi.com/api'

const useRMAPI = (api_path) => {
    const [characters, setCharacters] = useState([])
    useEffect(() => {
        fetch(API_BASE_URL + api_path)
            .then(response => response.json())
            .then(data => setCharacters(data.results))
    }, [])
    return characters
}

export default useRMAPI