import {CHANGE_INPUT_VALUE, ADD_TO_ITEM, DELETE_TO_ITEM, INIT_ITEM} from './actionTypes';


const  defaultState = {
    inputValue: '',
    list: []
};

// reducer 可以接受state，但是绝对不能修改state，永远是store做数据修改动作
// 纯函数指的是，给定固定的输入，就一定会有固定的输出，而且不会有任何副作用
export default (state = defaultState, action) => {
    if (action.type === CHANGE_INPUT_VALUE) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }else if (action.type === ADD_TO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }else if (action.type === DELETE_TO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        const index = action.index;
        newState.list.splice(index, 1);
        return newState;
    }else if (action.type === INIT_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list = action.data;
        return newState;
    }
    return state;
}