import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { applyMiddleware } from 'redux';
import createRootReducer from './root-reducer';
import rootSaga from './root-saga';
import createSagaMiddleware from 'redux-saga';

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const reduxRouterMiddleware = routerMiddleware(history);

const midlewares = [reduxRouterMiddleware, sagaMiddleware];

const initialState = {};

const store = createStore(
  createRootReducer(history),
  initialState,
  composeWithDevTools(applyMiddleware(...midlewares)),
);

sagaMiddleware.run(rootSaga);
export default store;
