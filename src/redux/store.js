import {combineReducers, createStore, applyMiddleware} from "redux";
import thunkMiddleware from 'redux-thunk';
import newsReducer from "./newsReducer";
import { reducer as formReducer } from 'redux-form';
import authReducer from "./authReducer";
import { persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['form', 'newsPage']
};

let reducers = combineReducers({
    newsPage: newsReducer,
    form: formReducer,
    auth: authReducer
});

const persistReducers = persistReducer(persistConfig, reducers);

let store = createStore(persistReducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;