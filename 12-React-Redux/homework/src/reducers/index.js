import {ADD_MOVIE_FAVORITE} from "../actions/index"

const initialState = {
    favorites: [],
    search: [],
    detail: {}

}

export default function reducer(state = initialState, action){

switch(action.type){
    //
    case ADD_MOVIE_FAVORITE:
        return {
            ...state,
            favorites: [...state.favorites, action.payload]
        }
    case "REMOVE_MOVIE_FAVORITE":
        return {
            ...state,
            favorites: state.favorites.filter((movie) => movie.imdbID !== action.payload )
        }
    case "GET_MOVIE":
        return {
            ...state,
            search: action.payload.Search,
        }
        
    case "GET_DETAIL":
        return {
            ...state,
            detail: action.payload,
        }
        

    default:
        return {...state}
}

}