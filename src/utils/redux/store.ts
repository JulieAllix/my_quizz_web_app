import {applyMiddleware, createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import {save as saveLocalStorage, load as loadLocalStorage} from 'redux-localstorage-simple';
import {reducers} from "./reducers";

const localStorageConfig = {
    namespace: "easyQuizzyApp",
    states: [
        "user",
    ]
};

let middlewares = [thunk, saveLocalStorage(localStorageConfig)]
middlewares = [createLogger(), ...middlewares];

export interface State {
    user: any,
}

export function buildStore() {
    const store = createStore(
        reducers,
        loadLocalStorage(localStorageConfig), // Initial state
        composeWithDevTools(applyMiddleware(...middlewares))
    );

    return store;
}