import {
    DECREMENT,
    DECREMENT_5,
    INCREMENT,
    INCREMENT_5,
    RESET,
} from "../types";

export const sum = () => {
    {
        type: INCREMENT;
    }
};
export const rest = () => {
    {
        type: DECREMENT;
    }
};
export const sum5 = () => {
    {
        type: INCREMENT_5;
        payload: 5;
    }
};
export const rest5 = () => {
    {
        type: DECREMENT_5;
        payload: 5;
    }
};
export const reset = () => {
    {
        type: RESET;
    }
};