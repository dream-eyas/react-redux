import { createStore, applyMiddleware, compose} from 'redux';
import reducer from './reducer';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import TodoSagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
    // redux-thunk
    // applyMiddleware(thunk, createSagaMiddleware),
    // redux-saga
    applyMiddleware(sagaMiddleware),

);

const store = createStore(reducer,enhancer);

sagaMiddleware.run(TodoSagas);

export default store;