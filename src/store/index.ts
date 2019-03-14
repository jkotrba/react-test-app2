import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { counterReducer } from './counter/reducers';

const rootReducer = combineReducers({
    counter: counterReducer
});

export type AppState = ReturnType<typeof rootReducer>

const configureStore = () => {
    const middleware = [thunkMiddleware];
    const appliedMiddleware = applyMiddleware(...middleware);

    const store = createStore(
        rootReducer,
        composeWithDevTools(appliedMiddleware)
    );

    return store;
}

export default configureStore;
