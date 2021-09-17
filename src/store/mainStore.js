import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {mainReducer} from "./modules/main/MainReducer";

const composeEnhancers = (typeof window !== 'undefined' && window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']) || compose;

const reducers = combineReducers({
    mainReducer: mainReducer
});

export const mainStore = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);

