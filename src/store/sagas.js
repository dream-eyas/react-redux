import { put, takeEvery } from 'redux-saga/effects'
import {GET_INIT_LIST_ITEM} from './actionTypes';
import {initListAction} from './actionCreators';
import axios from 'axios';


function* getInitList() {
    try {
        const res = yield axios.get('/list.json');
        const action = initListAction(res.data);
        console.log(action);
        yield put(action);
    }catch (e) {
        console.log('list.json请求失败');
    }

}

// generator 函数
function* mySaga() {
    yield takeEvery(GET_INIT_LIST_ITEM, getInitList);

}




export default mySaga;