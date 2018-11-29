// // store
// import { createStore } from 'redux';
// import reducer from './reducer';
// const store = createStore(reducer);
// export default store;




import { createStore } from 'redux';
import reducer from './reducer';
import { applyMiddleware, compose } from 'redux';  // 使用中間件Redux-thunk 引入
import thunk from 'redux-thunk';

// // 2.=============== 使用中間件 Redux-thunk  ===============
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(
  applyMiddleware(thunk)
);
const store = createStore(reducer, enhancer);

export default store;
