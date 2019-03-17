import { 
    SINGLE_MOVIE_SUCCES,
    SINGLE_MOVIE_FAILUR
  } from '../actions/getSingleMovieAction';
  import { handleActions } from 'redux-actions';

  type startState = {
    result: Object<any>,
    error: string
  }

  const INITIAL_STATE: startState = {
    result: {},
    error: ''
  };

  export default handleActions({
  [SINGLE_MOVIE_SUCCES]: (state, action) => ({
    ...state,
    result: action.payload,
  }),
  [SINGLE_MOVIE_FAILUR]: (state, action) => ({
    ...state,
    error: action.payload,
  }),
}, INITIAL_STATE);

  