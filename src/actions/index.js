export const actions = {
    addCharacters: 'ADD_CHARACTERS'
}

export const addCharacters = payload => ({
    type: actions.addCharacters,
    payload
})