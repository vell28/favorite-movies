import { call, put, takeEvery, takeLatest  } from "redux-saga/effects";

import { 
    POST_REQUEST,
    getAllSuccess,
    getAllPostsFeilur
} from '../actions/getPostAction';
import HTTP_Request from '../services/HTTTP_Request';
import { Config } from '../config';

function* callGetPosts() {

    const payload = yield call(HTTP_Request, `GET`, `${Config.getMovie}?page=0`);

    if(payload.length) {
        yield put( getAllSuccess( payload ) );
    } else {
        yield put( getAllPostsFeilur( payload ) );
    }
}

export function* getPostsSaga() {
    yield takeEvery( POST_REQUEST, callGetPosts);
}