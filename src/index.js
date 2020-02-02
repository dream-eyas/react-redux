import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import TodoList1 from './TodoList1';

import {Provider} from 'react-redux';
import store from './store';

const App = (
    <Provider store={store}>
        <TodoList1 />
    </Provider>
);

ReactDOM.render(App, document.getElementById('root'));

