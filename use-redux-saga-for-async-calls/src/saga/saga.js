import {
takeLatest,
takeEvery,
// eslint-disable-next-line
throttle,
  delay,
  put,
} from 'redux-saga/effects';

function* ageUpAsync() {
  yield put({type: 'LOADING'})
  yield delay(3000);
  yield put({ type: 'AGE_UP_ASYNC', value: 1 });
}

export function* watchAgeUp() {
  // call to get all clicks event
//   yield takeEveryClick()

  // call to get only one click event
  yield takeLatestClick();

  //use saga/effects throttle() method and call directly ageUpAsync
  //but it does not work as takeLatestClick()
//   yield throttle(1000, 'AGE_UP', ageUpAsync)
}


// saga/effects method takeEvery() only all clicks
// eslint-disable-next-line
function* takeEveryClick() {
  yield takeEvery('AGE_UP', ageUpAsync);
}

// saga/effects method takeLatest() only gets latest one click
function* takeLatestClick() {
  yield takeLatest('AGE_UP', ageUpAsync);
}
