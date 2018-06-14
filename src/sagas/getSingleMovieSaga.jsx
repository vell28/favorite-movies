import { call, put, takeEvery } from "redux-saga/effects";

import { 
    SINGLE_MOVIE_REQUEST,
    getSingleMovieSuccess,
    getSingleMovieFeilur
} from '../actions/getSingleMovieAction';
import HTTP_Request from '../services/HTTTP_Request';
import { Config } from '../config';

function* callSingleMovie({payload}) {

    const response = yield call(HTTP_Request, `GET`, `${Config.getMovie}/${payload.id}`);

    if(response.id) {
        yield put( getSingleMovieSuccess( response ) );
    } else {
        yield put( getSingleMovieFeilur( response ) );
    }
}

export function* callSingleMovieSaga() {
    yield takeEvery( SINGLE_MOVIE_REQUEST, callSingleMovie);
}