export const addFavorite = (data) => {
    return{
        type:'addFavorite',
        payload: data
    }
}

export const deleteFavorite = (data) => {
    return{
        type:'deleteFavorite',
        payload: data
    }
}