import { createAction, handleActions } from "redux-actions";

const defaultState = [];

export const SET_SORTED = "SET_SORTED";
export const setSorted = createAction(SET_SORTED);

export const sorted = handleActions({
  SET_SORTED: (state, { payload }) => {
    if(payload.length){
      return state.concat(payload);
  }else{
      return [];
  }
  },
}, defaultState);
