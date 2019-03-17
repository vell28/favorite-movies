import { call, put, takeEvery, takeLatest  } from "redux-saga/effects";
import addToLocalStorage from '../utils/AddToLocalStorage';
import removeFromLocalStorage from '../utils/RemoveFavoriteMovie';

import { 
    INIT_ADD_TO_FAVORITE,
    addToFavorite
} from '../actions/addMovieToFavorite';
import { getFavorites } from '../selectors';

function* addMovieTofavorite(action) {
    if(action.payload) {
        if (localStorage['favoriteMovie']) {
            let movies = JSON.parse(localStorage['favoriteMovie']);
            const removed = movies.find(item => Number(item) === Number(action.payload));

            movies = removed ? movies.filter(item => Number(item) !== Number(action.payload)) : movies;
            !removed && movies.push(action.payload);
            yield put(addToFavorite(movies));
            localStorage.setItem('favoriteMovie', JSON.stringify(movies));
            return;
        }
        yield put(addToFavorite([action.payload]));
        localStorage.setItem('favoriteMovie', JSON.stringify([action.payload]));
    }
    if (!action.payload && localStorage['favoriteMovie']) {
       const getFavoritesId = JSON.parse(localStorage['favoriteMovie']);
       yield put(addToFavorite(getFavoritesId))
    }
}

export function* initAddToFavorite() {
    yield takeEvery( INIT_ADD_TO_FAVORITE, addMovieTofavorite);
}