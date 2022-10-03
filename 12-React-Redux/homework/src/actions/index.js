export const ADD_MOVIE_FAVORITE = "ADD_MOVIE_FAVORITE"



export function addMovieFavorite(payload) {
    return { type: ADD_MOVIE_FAVORITE, payload };
  }
  
  export function removeMovieFavorite(movie) {
    //payload seria el Id de la pelicula a eliminar
    return { type: "REMOVE_MOVIE_FAVORITE", payload: movie };
  }
  
  export function getMovies(titulo) {
    return function(dispatch) {
      return fetch("http://www.omdbapi.com/?apikey=tuApiKey&s=" + titulo)
        .then(response => response.json())
        .then(json => {
          dispatch({ type: "GET_MOVIES", payload: json.Search });
        });
    };
  }

  export function getDetail(movieId){
    return function(dispatch){
      return fetch(`aqui va el link=${movieId}`).then(
            (respuesta) => respuesta.json())
        .then((respJson) => dispatch({type:"GET_DETAIL", payload: respJson }))
    }
  }