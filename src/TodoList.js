import React, {Component} from 'react';
import store from './store';
import {getInputChangeAction, getAddItem, getDeleteItem, getInitListItem} from './store/actionCreators';
import TodoListUI from './TodoListUI';
import {connect} from 'react-redux';

class TodoList extends Component{

    constructor(props) {
        super(props);
        // this.handleInputChange = this.props.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleClickChange = this.handleClickChange.bind(this);
        this.handleDeleteChange = this.handleDeleteChange.bind(this);

        store.subscribe(this.handleStoreChange);
    }

    render() {
        return <TodoListUI
            inputValue={this.props.inputValue}
            list = {this.props.list}
            handleInputChange = {this.props.handleInputChange}
            handleClickChange = {this.handleClickChange}
            handleDeleteChange = {this.handleDeleteChange}
        />
    }

    componentDidMount() {
        // thunk-把dispatch方法进行升级，让dispatch方法入参不仅可以使用对象，也可以使用函数
        // 如果使用函数，他通过一个Side Effects转换成对象然后调用
        // 有点类似切面
        // axios.get('/list.json').then( (res)=> {
        //     const data = res.data;
        //     store.dispatch(initListAction(data));
        // })
        // const action = getTodoList();
        // store.dispatch(action);
        // saga
        // const action = getInitListItem();
        // console.log(action);
        // store.dispatch(action);

    }


    handleStoreChange() {
        this.setState(store.getState());
    }

    // handleInputChange(e) {
    //     // const action = {
    //     //     type: CHANGE_INPUT_VALUE,
    //     //     value: e.target.value
    //     // };
    //     store.dispatch(getInputChangeAction(e.target.value));
    // }

    handleClickChange() {
        // const action = {
        //     type: ADD_TO_ITEM
        // };
        store.dispatch(getAddItem());
    }

    handleDeleteChange(index) {
        // const action = {
        //     type: DELETE_TO_ITEM,
        //     index: index
        // }
        store.dispatch(getDeleteItem(index));
    }

}

// function TodoList() {
//     return <div>
//         hello redux
//     </div>
// }

const mapStateToProps = (state) =>{
    return {
        inputValue: state.inputValue,
        list: state.list
    }
};

// store.dispatch, props
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputChange(e) {
            const  action = getInputChangeAction(e.target.value);
            dispatch(action);
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

// export default TodoList;