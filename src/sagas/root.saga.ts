import {put, takeEvery} from 'redux-saga/effects'

function* aSaga() {
	yield put({type: 'COUNT_OK'})
}

function* rootSaga() {
	yield takeEvery('COUNT', aSaga)
}

export {rootSaga}
