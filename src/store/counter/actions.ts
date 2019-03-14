import { TypeKeys } from './types';
import ThunkResult from "../ThunkResult";

export const incrementAction = (by: number) => ({
    type: TypeKeys.INCREMENT_COUNTER,
    by
});
export const incrementActionAsync = (by: number) => {
    return async (dispatch) => {
        await wait(200);
        dispatch(incrementAction(by));
    };
};

export const decrementAction = (by: number) => ({
    type: TypeKeys.DECREMENT_COUNTER,
    by
});
export const decrementActionAsync = (by: number) => {
    return async (dispatch) => {
        await wait(200);
        dispatch(decrementAction(by));
    };
};

const wait = (ms: number) => new Promise((resolve) => {
    setTimeout(resolve, ms);
});
