import { takeEvery,put } from 'redux-saga/effects';
import axios from 'axios'
import { GET_TODOLIST,GET_Users_LIST } from './actions';
import { getListAction,getAllUsersListAction }from './actionCreate';

function* rootSage(){
  yield takeEvery( GET_TODOLIST, getList )
  yield takeEvery( GET_Users_LIST, getUsersList )
}

function* getList(){
  const res = yield axios.get('https://5ed47729fffad10016056e1c.mockapi.io/api/v1/lists');
  const data = getListAction(res.data.items);
  yield put(data)
}

function* getUsersList(){
  const res = yield axios.get('https://5ed47729fffad10016056e1c.mockapi.io/api/v1/users');
  const data = getAllUsersListAction(res.data.data);
  yield put(data)
}

export default rootSage