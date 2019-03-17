// @flow
import { 
  POST_REQUEST,
  GET_POSTS_SUCCES,
  GET_POSTS_FAILUR,
} from '../actions/getPostAction';
import { ADD_TO_FAVORITE } from '../actions/addMovieToFavorite';
import { handleActions } from 'redux-actions';

type startState = {
  result: Array<any>,
  favorites: Array<string>,
  error: string,
  isLoading: boolean
}

const INITIAL_STATE: startState = {
  result: [],
  favorites: [],
  error: '',
  isLoading: false
};

export default handleActions({
  [GET_POSTS_SUCCES]: (state, action) => ({
    ...state,
    result: action.payload,
    isLoading: true 
  }),
  [GET_POSTS_FAILUR]: (state, action) => ({
    ...state,
    error: action.payload,
    isLoading: true
  }),
  [ADD_TO_FAVORITE]: (state, action) => ({
    ...state,
    favorites: action.payload
  }),
}, INITIAL_STATE);