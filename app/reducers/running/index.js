import { createAction, handleActions } from "redux-actions";

const defaultState = false;

export const SET_RUNNING = "SET_RUNNING";
export const setRunning = createAction(SET_RUNNING);

export const running = handleActions({
  SET_RUNNING: (state, { payload }) => {
    return payload;
  }
}, defaultState);
