import {mainInitialState} from "./mainInitialState";
import {MainTypes} from "./MainTypes";

export const mainReducer = (state = mainInitialState, action) => {
    switch (action.type) {
        case MainTypes.INIT: {
            return {
                ...state,
                ...action.payload
            };
        }
        default: {
            return state;
        }
    }
}