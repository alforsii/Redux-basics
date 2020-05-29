// https://redux-saga.js.org/docs/introduction/
import {
  takeLatest,
  takeEvery,
  put,
  // eslint-disable-next-line
  throttle,
  // eslint-disable-next-line
  delay, 
  // eslint-disable-next-line
  call
} from 'redux-saga/effects';


//1. Using delay from 'redux-saga/effects'

function* ageUpAsync() {
  yield put({type: 'LOADING'})
  yield delay(3000);

  // type should be always different not to make infinite loop
  yield put({ type: 'AGE_UP_ASYNC', value: 1 });
}

// //2. Using custom delay()
// const customDelay = (ms) => new Promise(res => setTimeout(res, ms))
// function* ageUpAsync() {
//   yield put({type: 'LOADING'})
//   yield call(customDelay, 3000)
//   // type should be always different not to make infinite loop
//   yield put({ type: 'AGE_UP_ASYNC', value: 1 });
// }
// const delay = (ms) => new Promise(res => setTimeout(res, ms))
// Instead of doing yield delay(3000), we're now doing yield call(delay, 3000). What's the difference?
// In the first case, the yield expression delay(1000) is evaluated before it gets passed to the caller of next (the caller could be the middleware when running our code. It could also be our test code which runs the Generator function and iterates over the returned Generator). So what the caller gets is a Promise, like in the test code above.

// In the second case, the yield expression call(delay, 1000) is what gets passed to the caller of next. call just like put, returns an Effect which instructs the middleware to call a given function with the given arguments. In fact, neither put nor call performs any dispatch or asynchronous call by themselves, they return plain JavaScript objects.

// put({type: 'INCREMENT'}) // => { PUT: {type: 'INCREMENT'} }
// call(delay, 1000)        // => { CALL: {fn: delay, args: [1000]}}
// What happens is that the middleware examines the type of each yielded Effect then decides how to fulfill that Effect. If the Effect type is a PUT then it will dispatch an action to the Store. If the Effect is a CALL then it'll call the given function.

// This separation between Effect creation and Effect execution makes it possible to test our Generator in a surprisingly easy way:

export function* watchAgeUp() {
  // call to get all clicks event
//   yield takeEveryClick()

  // call to get only one click event
  yield takeLatestClick();

  //use saga/effects throttle() method and call directly ageUpAsync
  //but it does not work as takeLatestClick()
//   yield throttle(1000, 'AGE_UP', ageUpAsync)
}


// saga/effects method takeEvery() gets all clicks
// eslint-disable-next-line
function* takeEveryClick() {
  yield takeEvery('AGE_UP', ageUpAsync);
}

// saga/effects method takeLatest() gets only latest, one click
function* takeLatestClick() {
  yield takeLatest('AGE_UP', ageUpAsync);
}
