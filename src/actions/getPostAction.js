//@flow

import { createAction } from 'redux-actions';

type ActionType<T, P> = (payload: P) => { type: T, payload: P };

export const POST_REQUEST: string = 'POST_REQUEST';
export const GET_POSTS_SUCCES: string = 'GET_POSTS_SUCCES';
export const GET_POSTS_FAILUR: string = 'GET_POSTS_FAILUR';

export const getAllPosts: $PropertyType<getAllPosts, 'type'> = createAction(POST_REQUEST);

export const getAllSuccess: ActionType<
    $PropertyType<getAllSuccess, 'type'>,
    $PropertyType<getAllSuccess, 'payload'>
> = createAction(GET_POSTS_SUCCES);

export const getAllPostsFeilur: ActionType<
    $PropertyType<getAllPostsFeilur, 'type'>,
    $PropertyType<getAllPostsFeilur, 'payload'>
> = createAction(GET_POSTS_FAILUR);