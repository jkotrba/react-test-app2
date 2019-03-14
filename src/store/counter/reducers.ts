import {
 CounterState,
 TypeKeys,
 ActionType
} from './types';

const initialState: CounterState = {
    count: 0
};

export const counterReducer = (state: CounterState = initialState, action: ActionType) => {
    switch(action.type) {
        case TypeKeys.INCREMENT_COUNTER:
            return { count: state.count + action.by };
        case TypeKeys.DECREMENT_COUNTER:
            return { count: state.count - action.by };
        default:
            return state;
    }
};
