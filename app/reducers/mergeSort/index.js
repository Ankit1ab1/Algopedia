import { createAction, handleActions } from "redux-actions";

const defaultState = [];

export const SET_CURRENT_MERGE = "SET_CURRENT_MERGE";
export const setMergeTwo = createAction(SET_CURRENT_MERGE);

export const mergeTwo = handleActions({
  SET_CURRENT_MERGE: (state, { payload }) => {
    return payload;
  },
}, defaultState);
