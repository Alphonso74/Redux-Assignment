import {ADD_FIVE, DECREMENT, INCREMENT, SUB_FIVE} from "./actionsTypes";

export const increment = () => {
    return {
        type: INCREMENT
    }
};

export const decrement = () => {
    return {
        type: DECREMENT
    }
};

export const addFive = (value) => {
    return {
        type: ADD_FIVE,
        value: value
    }
};

export const subFive = (value) => {
    return {
        type: SUB_FIVE,
        value: value
    }
};
