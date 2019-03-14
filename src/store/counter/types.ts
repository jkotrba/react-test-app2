export interface CounterState {
    count: number
}

export enum TypeKeys {
    INCREMENT_COUNTER = "INCREMENT_COUNTER",
    DECREMENT_COUNTER = "DECREMENT_COUNTER"
};

interface IncrementAction {
    type: TypeKeys.INCREMENT_COUNTER;
    by: number;
};

interface DecrementAction {
    type: TypeKeys.DECREMENT_COUNTER;
    by: number;
};

export type ActionType =
    | IncrementAction
    | DecrementAction