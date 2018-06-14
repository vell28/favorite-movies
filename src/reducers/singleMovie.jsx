import { 
    SINGLE_MOVIE_SUCCES,
    SINGLE_MOVIE_FAILUR
  } from '../actions/getSingleMovieAction';
  
  type startState = {
    result: Object<any>,
    error: string
  }

  const initialState:startState = {
    result: {},
    error: ''
  };
  
  export default function SingleMovie(state:startState = initialState, action:any){
    switch (action.type) {
      case SINGLE_MOVIE_SUCCES:
        return {
          ...state, 
          result: action.payload 
        };
      case SINGLE_MOVIE_FAILUR:
        return { 
          ...state, 
          error: action.payload 
        };  
      default:
        return state;
    }
  };
  