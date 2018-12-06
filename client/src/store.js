import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// index filename is assumed in route name b/c its named index
import rootReducer from './reducers';

const initialState = {};
const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

// compose combines middlewars in order to accomodate the redux extension

export default store;
