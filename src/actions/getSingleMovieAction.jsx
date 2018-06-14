//@flow
import { createAction } from 'redux-actions';

export const SINGLE_MOVIE_REQUEST: string = 'SINGLE_MOVIE_REQUEST';
export const SINGLE_MOVIE_SUCCES: string = 'SINGLE_MOVIE_SUCCES';
export const SINGLE_MOVIE_FAILUR: string = 'SINGLE_MOVIE_FAILUR';


type ActionType<T, P> = (payload: P) => { type: T, payload: P };

export const getSingleMovie: $PropertyType<getSingleMovie, 'type'> = createAction(SINGLE_MOVIE_REQUEST);

export const getSingleMovieSuccess: ActionType<
    $PropertyType<getSingleMovieSuccess, 'type'>,
    $PropertyType<getSingleMovieSuccess, 'payload'>
> = createAction(SINGLE_MOVIE_SUCCES);

export const getSingleMovieFeilur: ActionType<
    $PropertyType<getSingleMovieFeilur, 'type'>,
    $PropertyType<getSingleMovieFeilur, 'payload'>
> = createAction(SINGLE_MOVIE_FAILUR);