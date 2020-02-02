import {CHANGE_INPUT_VALUE, ADD_TO_ITEM, DELETE_TO_ITEM, INIT_ITEM, GET_INIT_LIST_ITEM} from './actionTypes';


export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
});

export const getAddItem = () => ({
    type: ADD_TO_ITEM
});

export const getDeleteItem = (index) => ({
    type: DELETE_TO_ITEM,
    index
});

export const initListAction = (data) => ({
    type: INIT_ITEM,
    data
});

//
// export const getTodoList = () => {
//     return (dispatch) => {
//         axios.get('./list.json').then( (res)=> {
//             const data = res.data;
//             const action  = initListAction(data);
//             dispatch(action);
//         })
//     }
// };

export const getInitListItem = () =>({
    type: GET_INIT_LIST_ITEM
});
