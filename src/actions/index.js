export const actions = {
    addCharacters: 'ADD_CHARACTERS',
    addEpisodes: 'ADD_EPISODES'
}

export const addCharacters = payload => ({
    type: actions.addCharacters,
    payload
})

export const addEpisodes = payload => ({
    type: actions.addEpisodes,
    payload
})