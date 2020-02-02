import React from 'react';
import {getInputChangeAction, getAddItem, getDeleteItem} from './store/actionCreators';
import TodoListUI from './TodoListUI';
import {connect} from 'react-redux';

const TodoList1 = (props) => {

    const {inputValue, list, handleInputChange, handleClickChange, handleDeleteChange} = props;
    return <TodoListUI
        inputValue={inputValue}
        list={list}
        handleInputChange={handleInputChange}
        handleClickChange={handleClickChange}
        handleDeleteChange={handleDeleteChange}
    />
};

const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
};

// store.dispatch, props
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputChange(e) {
            const action = getInputChangeAction(e.target.value);
            dispatch(action);
        },

        handleClickChange() {
            const action = getAddItem();
            dispatch(action);
        },

        handleDeleteChange(index) {
            const action = getDeleteItem(index);
            dispatch(action);
        },

        // handleStoreChange() {
        //     this.setState(store.getState());
        // }
    }
};

// 实际上connect(mapStateToProps, mapDispatchToProps)(TodoList1)这个就是一个容器组件
export default connect(mapStateToProps, mapDispatchToProps)(TodoList1);

// export default TodoList1;