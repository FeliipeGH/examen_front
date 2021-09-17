import {MainTypes} from "./MainTypes";

export const initMainData = (data) => ({
    type: MainTypes.INIT,
    payload: data,
});