//@flow

import { createAction } from 'redux-actions';

type ActionType<T, P> = (payload: P) => { type: T, payload: P };

export const INIT_ADD_TO_FAVORITE: string = 'INIT_ADD_TO_FAVORITE';
export const ADD_TO_FAVORITE: string = 'ADD_TO_FAVORITE';

export const initAddToFavorite: $PropertyType<initAddToFavorite, 'type'> = createAction(INIT_ADD_TO_FAVORITE);

export const addToFavorite: ActionType<
    $PropertyType<addToFavorite, 'type'>,
    $PropertyType<addToFavorite, 'payload'>
> = createAction(ADD_TO_FAVORITE);