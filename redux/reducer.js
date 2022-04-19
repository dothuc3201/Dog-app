const initState = []

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'addFavorite':
            return [...state, action.payload];
        case 'deleteFavorite':
            return state.filter(image => image != action.payload)
        default:
            return state;
    }
}

export default rootReducer;